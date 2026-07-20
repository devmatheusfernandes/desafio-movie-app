import { Component, ErrorInfo, ReactNode } from 'react';
import Button from '../Button/Button';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    
    //esse seria como declarar as constantes usando o useState, mas aqui é feito dentro de uma classe, então é feito dessa forma
    //por exemplo: [hasError, setHasError] = useState(false) seria a mesma coisa que a linha abaixo
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        //esse atualiza o estado para que a próxima renderização mostre a UI alternativa
        //esse é o equivalente a setHasError(true) que seria usado no useState
        return { hasError: true };
    }

    //esse é chamado quando um erro é lançado em um componente filho
    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: "2rem", textAlign: "center", color: "#e4e4e7" }}>
                <h2>Ops! Algo deu errado.</h2>
                <p>Tente recarregar a página ou voltar mais tarde.</p>
                <Button onClick={() => window.location.reload()}>
                    Recarregar Página
                </Button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;