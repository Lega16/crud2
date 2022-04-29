var tabla;

function init() {
    
}

$(document).ready(function(){
    tabla=$('#producto_data').dataTable({
        "aProcessing": true,
        "aServerSide": true,
        dom: 'Bfrtip',
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdf'
        ],

        "ajax":{
            url: '../../controller/producto.php?op=listar',
            type: "get",
            dataType: "json",
            error: function(e){
                console.log(e.responseText);
            }
        },

        "bDestroy": true,
        "responsive": true,
        "bInfo": true,
        "iDisplayLength": 10, //colocar botones anterior 1 2 siguiente
        "order": [[0, "asc"]],
        "language": {

            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ resgistros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningun dato disponible en esta tabla",
            "sInfo": "Mostrando un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando un total de 0 registros",
            "sInfoFiltered": "(filtrado de un taotal de _MAX_ resgistros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },

            "oAria":{
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }

        }
    }).DataTable();
});

function editar(prod_id){
    console.log(prod_id);
}

function eliminar(prod_id){
    swal.fire({
        title: 'CRUD',
        text: "Esta seguro de Eliminar el registro?",
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        reverseButtons: true
     }).then((result) => {
        if (result.isConfirmed){

            $.post("../../controller/producto.php?op=eliminar",{prod_id:prod_id},function (data) {

            });

            $('#producto_data').DataTable().ajax.reload();

            swal.fire(
                'Eliminado!',
                'El registro se elimino correctamente.',
                'success'
            )
        }
    })
}

$(document).on("click","#btnnuevo", function(){
    $('#mdltitulo').html('Nuevo Registro');
    $('#modalmantenimiento').modal('show');
});

init();