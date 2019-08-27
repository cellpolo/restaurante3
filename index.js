
$(document).ready(function() {
		menub()
		
		$('.sidenav').sidenav();
		$(".dropdown-trigger").dropdown();
		$('.modal').modal();
		
		
});


function menub(){
	var mbebida = $("#products")
	var mcomida = $("#Comidas")
	var mpostres= $("#Postres")
	$.get('/productos.json',
	function(data){   
		var resp=data.productos.length
		console.log(resp)
		for(i=0;i<resp;i++)
		{
			var name=data.productos[i].nombre
			var price=data.productos[i].precio
			var cat=data.productos[i].categoria
			var img=data.productos[i].imagen
			mbebida.append('<div class="col s12 m6"><div class="card"><div class="card-image">'+
							'<img src="'+img+'"><span class="card-title">'+name+'</span>'+
							'<a id="'+name+'" class="btn-floating halfway-fab waves-effect waves-light red" onclick="add(this)"><i class="material-icons">add</i></a>'+
						'</div><div class="card-content"><div class="row">'+
							'<div class="input-field col s12"><input id="'+name+'"class="suma" type="number" value="0" disabled />'+
							'<input type="text" value="'+price+'" disabled /><input type="text" value="'+cat+'" disabled />'+
							'<input id="'+name+'" class="total" type="number" value="'+price+'" disabled></input>'+
							'<button id="'+name+'" class="total" type="number" value="0" disabled>0</button>'+
							'</div></div></div></div></div>')
		}
	}   
)}

function add(title){
	var id = title.id;
	var iniva =$("#"+id+".suma").val()
	var precio =$("#"+id+".total").val()
	var tprecio =$("button#"+id).val()
	console.log(id)
	if(iniva!=0){
		M.toast({html: 'Esta comprando otro(a) '+id})
	}
	iniva++
	var tpar=parseInt(tprecio)+parseInt(precio)
	
	

	
	
	console.log(tpar)
	return $("#"+id+".suma").val(iniva), $("button#"+id).text(tpar),$("button#"+id).val(tpar)
	
	

}


function testUno(nombre){
	console.log(nombre)
	var rnombre=nombre
	$.get('/productos.json', 
	function(data){
		var resp=data.productos.length
		for (i=0;i<resp;i++)
		{
			var lect=data.productos[i].nombre
			// console.log(lect)
			if(lect==rnombre){
				$( "p1" ).append( document.createTextNode( "fanta" ) );
				// add.innerHTML +="<"+cont+">"+rnombre+"</a>"
				var name=data.productos[i].nombre
				var price=data.productos[i].precio
				console.log("Repuesta Bebida: "+name+" "+price)
				$("#p1").text(name+" $"+price);
				
			}

	
		}             
	})
    
    
}

function cTotal(){
	$.get('/productos.json',
	function(data){   
		var resp=data.productos.length
		console.log(resp)
		$("tbody tr").empty()
		for(i=0;i<resp;i++)
		{
			var name=data.productos[i].nombre
			var iniva =$("#"+name+".suma").val()
			var tprecio = parseInt($("#"+name+".total").text())
			if(iniva>=1){
				$( "#ctotal" ).append('<tr><td>'+name+'</td><td><input type="number" class = "totalb" value='+iniva+' ><td></td><td id="ptm">'+tprecio+'</td></td><td><button class="btn btn-danger btn_remove">- Remove</button></td></tr>')
			}	
		}
	})	
}


  
 
  
  $("body").on("click",".btn_remove", function() {

	  $(this).parent().parent().remove();
  });

  $("body").on("click", ".totalb", function(){
	console.log("ja")
	
	console.log($(this).parent().parent())
})
 




function pgtotal(){
	var sum=0;
	var rest=-1;
	$("td#ptm").each(function() {  
	sum += parseFloat($(this).text().replace(/,/g, ''), 10); 
	rest -= parseFloat($(this).text().replace(/,/g, '')); 
	console.log(sum)
	}); 
	$('#resultado_total').text(sum.toFixed(2));

}

var sum=0;
 $('.subtotal').each(function() {  
  sum += parseFloat($(this).text().replace(/,/g, ''), 10);  
  console.log(sum)
 }); 
 $('#resultado_total').val(sum.toFixed(2));

 function plresta(){
	
	$(".totalb").change(function(){
		console.log("ja")
	})
	// "input", "input", function() {
	// rest -= parseFloat($(this).text().replace(/,/g, ''));
	// var input = $(this);
	// console.log('esto es el inout ' + input)
	// var rest = input.closest("tr").children();
	// var price = rest.eq(3).text();
	// var calculated = input.val() * price;
	// rest.eq(5).text(calculated.toFixed(2));
	// sumar_columnas();
 }










 //  function Cancelar() {
// 	var rest=0;
// 	$("tm#pmt").each(function(){
// 		rest -= parseFloat($(this).text().replace(/,/g,),10);
// 	})
// 	$('#resultado').val(rest.toFixed(2));
//  }
 
//  var rest=0;
//  $('subtotal').each(function(){
// 	 rest -=parseFloat($(this).text().replace(/,/g, ''), 10);
// 	 console.log(rest)
//  });
//  $('#resultado').val(rest.toFixed(2));




// $(".ptot").each(function() {
// 	calculateSum();
// });

// function calculaSum(){
// var sum = 0;
// $(".ptot").each(function() {
// var value = $ (this).text;
// 	if(!isNaN(value) && value.length !=0){
// 		sum += parseFloat(value);
// 	}
// });

// $ ('#result').text(sum);
// };










// function CalcularTotal() {
 
//     var total = 0;
//     $("#ptotal> [id*='ptot']").each(function() {
 
//         var coltotal = parseFloat($(this).html());
 
//         if (!isNaN(coltotal)) {
//             total += coltotal;
//         }
 
//     });
 
//     $("#ptotal> [id*='ptot']").html(total);
 
// }

// function sumar(c) { //alert(c);
// 	var campo = $('#ptotal');
// 	var subtotal = 0;

// 	if (!/^d*$/.test(c))  
// 	   return;
	
// 	for (var i = 0; i < campo.length - 1; i++) { 
// 	   if (!/^d+$/.test(campo[i].value)) 
// 		  continue;
// 	   subtotal += parseFloat(campo[i].value);
// 	}
	 
//  }

//  var products=parseInt(tprecio)+parseInt(precio)












// function sumcort() {
// 	sumlinea = 0
// 	$(".sumlinea").each(
// 		function(index, value) {
// 			sumlinea = sumlinea + eval($(this).val());
// 		}
// 	);
// 	$("#total").val(sumlinea);
// }
 
// function nueva_linea() {
// 	$("#lineas").append('<input type="text" class="sumlinea" value="0"/><br/>');
// }













// $('.amt').keyup(function() {
// 	var importe_total = 0
// 	  $(".amt").each(
// 		function(index, value) {
// 		  if ( $.isNumeric( $(this).val() ) ){
// 		  importe_total = importe_total + eval($(this).val());
// 		  //console.log(importe_total);
// 		  }
// 		}
// 	  );
// 		  $("#inputTotal").val(importe_total);
// 	});












//    function Totale(){
	

//   	var variableAcumuladora ="ptotal";
//    $('.ptotal').each(function(){
//    	   var valor = $(this).attr("ptotal");
//  	  variableAcumuladora += Number(valor) ;
//    	});
	
//    	$("#ptotal").text(variableAcumuladora);
// // // // 	/*
// // // // 	var obtenValor = $('.otraClase').attr("dato")
// // // // 	var variableAcumuladora = 0
  
// // // // 	$('.claseEjemplo').each(function(){
// // // // 	  variableAcumuladora += Number(datoAcumular)
// // // // 	});
  
// // // // 	 capturaAcumulable = Number(variableAcumuladora)
// // // //   */
	 
//      }

  











// $('#modal1').change(function modal() {
 
// 	var obj = {};
// 	var string = '';
// 	var sum = 0;

// 	// Grupo 1
// 	if ($("input:radio[name=RadioGroup1]").is(':checked')) {
// 	   var n1 = $("input:radio[name=RadioGroup1]:checked").val();
// 	   sum += parseFloat(n1);
// 	}

// 	$('#resultado').val(sum);

//  });












// function Total(){
	
// 	var dato1, resultado;

// 	$("button").click(function(){
   
// 	dato1 = parseInt($("#entrada1").val());

   
// 	if (dato1 > dato2)
// 	{
// 	resultado = " el primero es mayor.";
// 	}
// 	else
// 	{
// 	if (dato2 > dato1){
// 	resultado = " el segundo es mayor.";
// 	}
// 	else {
// 	resultado = " son iguales.";
// 	}
// 	}
// 	$("#salida").append(resultado);
// 	});
   
//    }; 
	
	









//  function Total (){

//  var productos;
//  $(".products").change(function(){
//  	var valorproductos = new Array();
//  	productos=$(".products");
//  	for(var i=0;i<productos.length;i++){
// 		valorproductos.push($(productos[i]).val());            
//  	}

	    
	
//  });


//  }
// function Total() {
 
// 			var myWindow = window.open("", "MsgWindow", "width=200,height=100");
// 	myWindow.document.write("nuevo");           
// 		}
	
			
		
	
	
	
	
	// var myWindow = window.open("", "MsgWindow", "width=200,height=100");
	// myWindow.document.write(".");
  






// function testDos(nombre2){
// 	console.log(nombre2)
// 	var rnombre2=nombre2
// 	$.get('/productos.json', 
// 	function(data){
// 		var resp2=data.productos2.length
// 		for (i=0;i<resp2;i++)
// 		{
// 			var lect2=data.productos2[i].nombre
// 			// console.log(lect)
// 			if(lect2==rnombre2){
// 				$( "p1" ).append( document.createTextNode( "sprite" ) );
// 				// add.innerHTML +="<"+cont+">"+rnombre+"</a>"
// 				var name=data.productos2[i].nombre
// 				var price=data.productos2[i].precio
// 				console.log("Repuesta Comidas: "+name+" "+price)
// 				$("#p1").text(name+" $"+price);
// 			}
// 		}             
// 	})
    
    
// }




// var v = 0;
// setValor();
// $('#comprar').click(function(){
//   v++;
//   setValor();
// });
// function setValor(){
//   $('#div').html(v);
// }






// function operacion(a,b){
//     var resultado=a+b; 
//     alert('La suma de '+ a +' más '+b+' es igual a ' +resultado);
// }
// $('#calcula').click(function(){
//     var num1= parseInt(jQuery('#Bebidas').val(),10); 
//     var num2= parseInt(jQuery('#Comidas').val(),10); 
//     operacion(num1,num2); 
// });

// function suma_total(){
//     var cont_fila = ($('#Bebidas').find('tr').length);
//     var total_general = 0;
//     for(var i=1; i < cont_fila; i++) {
//         var subtotal = $('#Subtotal_' + cont_fila).val();
//         total_general = parseFloat(total_general) + parseFloat(subtotal);

//     }

//     $("detalle total").text((total_general * 1).toFixed(2));
// }

// var cont = 0;
// var total = 0;

// function agregar(){

//     var cantidad = $("#Cantidad").val();
//     var IDInsumo = $("idInsumo").val();
//     var Precio_Compra = $("Precio_Compra").val();
//     var subtotal = $("#Precio_Compra").val();
//     total = subtotal + total;
//     console.info(total);
//     $("total").val(total);
// }
