//ia acabar precisando duplicar isso no details, mas deixar aqui fica mais facil de usar e posso usar no card e nas paginas
export const getImageUrl = (posterPath: string | null, size: string = 'w500') => {
  return posterPath
    ? `https://image.tmdb.org/t/p/${size}${posterPath}`
    : 'https://via.placeholder.com/500x750?text=Sem+Imagem';
};