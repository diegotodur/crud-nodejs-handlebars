
$(document).ready(() => {
    $("#crear-anime-formulario").submit((event) => {
        event.preventDefault();

        const datos = {
            nombre: $("#nombre").val(),
            anio: $("#anio").val(),
            autor: $("#autor").val(),
            genero: $("#genero").val()
        };

        $.ajax({
            url: "/crear",
            type: "POST",
            data: datos,
            success: (response) => {
                if (response === "Anime creado exitosamente") {
                    Swal.fire(
                        'Excelente!',
                        `Anime ${datos.nombre} creado!`,
                        'success'
                    ).then(() => {
                        setTimeout(() => {
                        location.href = "http://localhost:4000/";
                        }, 500)
                    });
                } else {
                    Swal.fire(
                        'Error',
                        'Ocurrió un error al crear el anime',
                        'error'
                    );
                }
            },
            error: () => {
                Swal.fire(
                    'Error',
                    'Ocurrió un error al crear el anime',
                    'error'
                );
            }
        });
    });
});