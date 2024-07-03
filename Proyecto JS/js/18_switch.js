/* estructura switch */

let metodopago = '';

metodopago = 'Efectivo';

switch(metodopago){
	case 'Targeta':
		console.log('paga con targeta');
	break;
	case 'Efectivo':
		console.log('pago en efectivo');
	break;
	case 'Cheque':
		console.log('paga con cheque, pendiente validar');
	break;
	case 'PSE':
		console.log('pago electronico');
	break;
	default:
		console.log('No se realizó pago')
	break;
}