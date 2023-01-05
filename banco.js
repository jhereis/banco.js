<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Banco</title>

	<script>
	
	var saldo = 100;
	
        var nome = prompt("Digite seu nome")
        verificar_senha()
        function inicio_caixa(){
            alert("Voce possui acesso a sua conta agora" +  nome)

//parseInt numero inteiro
//parseFloat numero com ponto

            let opcao = parseInt(prompt("Escolha uma função: \n 1) Saldo \n 2) Extrato \n 3) Saque \n 4) Depósito \n 5)Transferência \n 6) Sair \n"))

            switch(opcao){
                case 1:
                   alert("Saldo")
                   ver_saldo();
                   inicio_caixa();
                  break;
                case 2:
                    alert("Extrato")
                    ver_extrato();
                    inicio_caixa();
                    break;
                case 3:
                    alert("Saque");
                    fazer_saque();
					
                   break;
                case 4: 
                    alert("Depósito")
                    fazer_deposito();
                    ver_saldo();
                    inicio_caixa();
                    break;
                case 5:
                    alert("Transferência")
                    fazer_transferencia();
                    break;
                case 6:
                    alert("Sair")
                    sair_caixa();

                default:
                    if(opcao>6)
                    alert("Opção invalida! Tente novamente!");
                    
            }

                
        }

        function ver_saldo() {
			alert('Seu saldo atual é: ' + saldo);
            inicio_caixa();
        }

        function ver_extrato(){
            alert("Extrato: <br> em 01/02 -> Shein - Debito de -- 250,00 R$ \n <br>  em 06/08 - Starbugs - Debito de -- 82,00 R$ \n <br> Entrada em 09/04 - Valor de 100,00 R$ \n")
        }

        function fazer_saque(){
            if (saldo <= 0){
            alert("Voce nao possui saldo")
            inicio_caixa();
            }
            let saque = parseFloat(prompt("Digite o valor desejado"));
            if(saque > saldo){
            alert("Você não possui saldo suficiente, seu saldo atual é de: " + saldo + " por favor informe uma quantidade valida ou faça um depósito")
            inicio_caixa();
            }
            if(isNaN(saque) || saque == ""){
            alert("Insira um valor válido");
            fazer_saque();
            }
            else{
            saldo -= saque
            ver_saldo();
            inicio_caixa();
            }
        }

        function fazer_deposito(){
            let deposito = parseFloat(prompt("Insira a quantidade que deseja depositar"));
            
            if(deposito<=0){
            alert("Insira um número válido");
            fazer_deposito();
            }
            else if(isNaN(deposito) || deposito == ""){
            alert("Insira um número");
            fazer_deposito();
            }
            else{
                saldo += deposito;
                ver_saldo();
            } 
        }

        function fazer_transferencia(){
            let conta = parseInt(prompt("Insira o número da conta"));

            if(isNaN(conta) || conta == ""){
            alert("Insira um valor de conta válido");
            fazer_transferencia();
            }
            let trans = parseFloat(prompt("Insira o valor que deseja transferir"))
            if(isNaN(trans) || trans == ""){
            alert("Insira um valor válido");
            fazer_transferencia();
            }
            else if(trans>saldo){
                alert("Operação negada")
                alert("Informe um valor que esteja dentro do seu saldo")
                fazer_transferencia();
            }
            else{
                saldo -= trans
                ver_saldo();
            }
        }

        function sair_caixa(){
            let sair = confirm("Deseja sair do caixa?")
            if (sair) {
				window.close();
			} else {
				inicio_caixa();
			}
        }

        function verificar_senha(){

            let senha = 8969;

            let userSenha = parseInt(prompt("Digite sua senha"));

            if(isNaN(userSenha) || userSenha == ''){
                alert("Digite apenas numeros, repita de novo corretamente cabeça");
                verificar_senha();
            }
            else if (userSenha != senha){
                alert("Erro! voce falhou em sua senha");
                verificar_senha();
            }
            else{
                alert("Estamos te encaminhando para operação");
            }
        }

        inicio_caixa()

	</script>
</head>

<body>

</body>

</html>
