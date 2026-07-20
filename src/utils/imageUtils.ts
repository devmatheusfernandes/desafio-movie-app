//ia acabar precisando duplicar isso no details, mas deixar aqui fica mais facil de usar e posso usar no card e nas paginas
export const getImageUrl = (posterPath: string | null, size: string = 'w500') => {
  if (posterPath) {
    return `https://image.tmdb.org/t/p/${size}${posterPath}`;
  }

  // SVG embutido de "Sem Imagem" (o outro dava erro de conexao)
  const svgPlaceholder = `
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="750" viewBox="0 0 500 750" fill="#18181f">
      <rect width="100%" height="100%" fill="#18181f"/>
      <text x="50%" y="50%" fill="#71717a" font-family="sans-serif" font-size="24" font-weight="bold" text-anchor="middle" dominant-baseline="middle">
        Sem Imagem disponível
      </text>
    </svg>
  `.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svgPlaceholder)}`;
};