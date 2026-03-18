function SomarNumeros() {
    let soma = 0;
    let continuar = true;
    while (continuar) {
        let numero = parseFloat (prompt ( "Digite um número para somar:" ));
         if (! isnan (numero)); {
        soma += numero;

        // soma = soma + numero
        console.log (soma);

        } else {
          alert( "Por favor, digite um número válido" );
    }
        continuar = confirm ( "Deseja adicionar mais um número?" )
}
    
}