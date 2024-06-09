const Carousel = ({ imagenes }) => {
  // Obtener la primera imagen de la lista
  const primeraImagen = imagenes.length > 0 ? imagenes[0].ruta : null;

  return (
    <div className="px-2 pt-3 flex justify-center">
      {primeraImagen && (
        <img
          src={primeraImagen}
          alt="Imagen de proyecto"
          className="mx-5 w-52 h-40 rounded-xl shadow-md"
        />
      )}
    </div>
  );
};

export default Carousel;
