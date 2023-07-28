$(document).ready(() => {
    $("#editar-anime-formulario").submit(function(event) {
      event.preventDefault();
      const idAnime = $("#id").text().trim();  
      const datos = {
        id: idAnime,
        nombre: $("#nombre").val(),
        anio: $("#anio").val(),
        autor: $("#autor").val(),
        genero: $("#genero").val(),
      };
  
      $.ajax({
        url: `/editar/${datos.id}`,
        type: "POST",
        data: datos,
        success: (response) => {
          if (response === "Anime editado exitosamente") {
            Swal.fire(
              'Excelente!',
              `Anime ${datos.nombre} editado!`,
              'success'
            ).then(() => {
              location.href = `http://localhost:4000/editar/${datos.id}`;
            });
          } else {
            Swal.fire(
              'Error',
              'Ocurrió un error al editar el anime',
              'error'
            );
          }
        },
        error: () => {
          Swal.fire(
            'Error',
            'Ocurrió un error al editar el anime',
            'error'
          );
        }
      });
    });
  });
  