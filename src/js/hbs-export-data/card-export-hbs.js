$(document).ready(() => {
  $(".eliminar-anime").click(function() {
    const idAnime = $(this).data("id");
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Estás a punto de eliminar el anime.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        $.ajax({
          url: `/eliminar/${idAnime}`,
          type: "GET",
          success: (response) => {
            if (response === "Anime eliminado exitosamente") {
              Swal.fire(
                'Excelente!',
                'El anime ha sido eliminado.',
                'success'
              ).then(() => {
                location.href = "http://localhost:4000/animes";
              });
            } else {
              Swal.fire(
                'Error',
                'Ocurrió un error al eliminar el anime.',
                'error'
              );
            }
          },
          error: () => {
            Swal.fire(
              'Error',
              'Ocurrió un error al eliminar el anime.',
              'error'
            );
          }
        });
      }
    });
  });
});
