// js/form.js
// Funções de Validação Avançada
const validarCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let soma;
    let resto;

    // Validação do 1º dígito
    soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    resto = 11 - (soma % 11);
    let digito1 = (resto === 10 || resto === 11) ? 0 : resto;
    if (digito1 !== parseInt(cpf.charAt(9))) return false;

    // Validação do 2º dígito
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digito2 = (resto === 10 || resto === 11) ? 0 : resto;
    if (digito2 !== parseInt(cpf.charAt(10))) return false;

    return true;
};

const validarMaioridade = (dataNascimento) => {
    const dataNasc = new Date(dataNascimento);
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();

    // Ajusta a idade se o aniversário ainda não ocorreu este ano
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
        return idade - 1 >= 18;
    }

    return idade >= 18;
};


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (!form) return;

    // Função para mostrar erro de forma padronizada
    const mostrarErro = (campo, mensagem) => {
        const aviso = document.createElement("span");
        aviso.textContent = mensagem;
        aviso.classList.add("erro");
        aviso.style.color = "var(--cor-erro, red)"; // Usando variável CSS ou padrão
        aviso.style.fontSize = "0.9rem";
        aviso.style.display = "block";
        aviso.style.marginTop = "4px";
        
        // Remove erros anteriores no campo
        let elementoAtual = campo.nextElementSibling;
        while (elementoAtual && elementoAtual.classList.contains("erro")) {
            const proximo = elementoAtual.nextElementSibling;
            elementoAtual.remove();
            elementoAtual = proximo;
        }

        campo.insertAdjacentElement("afterend", aviso);
        campo.classList.add("input-erro"); // Adiciona classe para estilização CSS se quiser
    };

    // Função para limpar erros de um campo
    const limparErros = (campo) => {
        campo.classList.remove("input-erro");
        let elementoAtual = campo.nextElementSibling;
        while (elementoAtual && elementoAtual.classList.contains("erro")) {
            const proximo = elementoAtual.nextElementSibling;
            elementoAtual.remove();
            elementoAtual = proximo;
        }
    };


    // === Evento de Submissão do Formulário ===
    form.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nome = form.querySelector("#nome");
        const email = form.querySelector("#email");
        const cpf = form.querySelector("#cpf");
        const telefone = form.querySelector("#telefone");
        const nascimento = form.querySelector("#nascimento");
        const mensagem = form.querySelector("#mensagem");
        
        let valido = true;

        // Limpa todas as mensagens antigas antes de revalidar
        form.querySelectorAll(".erro").forEach((el) => el.remove());
        form.querySelectorAll("input, select, textarea").forEach(el => el.classList.remove("input-erro"));

        // Reinicia a função auxiliar para que ela use o escopo de 'valido'
        const mostrarErroSubmissao = (campo, mensagem) => {
             mostrarErro(campo, mensagem);
             valido = false;
        };


        // --- Validações Personalizadas ---
        
        if (nome.value.trim().length < 3) {
            mostrarErroSubmissao(nome, "O nome deve ter pelo menos 3 caracteres.");
        }

        if (!email.value.includes("@") || !email.value.includes(".")) {
            mostrarErroSubmissao(email, "Por favor, insira um e-mail válido.");
        }
        
        // Validação de CPF
        const cpfLimpo = cpf.value.replace(/\D/g, "");
        if (cpfLimpo.length !== 11 || !validarCPF(cpfLimpo)) {
             mostrarErroSubmissao(cpf, "CPF inválido. Verifique os números.");
        }

        if (telefone.value.replace(/\D/g, "").length < 10) {
            mostrarErroSubmissao(telefone, "O telefone deve ter pelo menos 10 números (incluindo DDD).");
        }
        
        // Validação de Maioridade
        if (!nascimento.value || !validarMaioridade(nascimento.value)) {
             mostrarErroSubmissao(nascimento, "É necessário ter 18 anos ou mais para se cadastrar.");
        }

        if (mensagem && mensagem.value.trim().length > 0 && mensagem.value.trim().length < 10) {
            mostrarErroSubmissao(mensagem, "A mensagem deve ter pelo menos 10 caracteres ou estar vazia.");
        }
        // ---------------------------------

        if (valido) {
            // Se todas as validações passarem
            alert("✅ Formulário enviado com sucesso! Obrigada por participar 💖");
            form.reset();
        } else {
            // Foca no primeiro campo com erro
            const primeiroErro = form.querySelector(".input-erro");
            if(primeiroErro) {
                primeiroErro.focus();
            }
        }
    });
    
    // Opcional: Adicionar validação em tempo real ao sair do campo (blur)
    const camposParaValidarBlur = [
        { id: "#cpf", validador: (v) => v.length === 11 && validarCPF(v), msg: "CPF inválido." },
        { id: "#nascimento", validador: (v) => validarMaioridade(v), msg: "É preciso ter 18+ anos." }
    ];

    camposParaValidarBlur.forEach(campoInfo => {
        const campo = form.querySelector(campoInfo.id);
        if(campo) {
            campo.addEventListener("blur", () => {
                const valor = campo.value.replace(/\D/g, ""); // Limpa o CPF
                if(campoInfo.id === "#nascimento") { // Para data, o valor é diferente
                     if (!campo.value) return; // Não valida se estiver vazio
                     if (!campoInfo.validador(campo.value)) {
                        mostrarErro(campo, campoInfo.msg);
                    } else {
                        limparErros(campo);
                    }
                } else {
                    // Validação de CPF no blur
                    if (valor.length > 0 && !campoInfo.validador(valor)) {
                        mostrarErro(campo, campoInfo.msg);
                    } else {
                        limparErros(campo);
                    }
                }
            });
        }
    });


    // === Busca de endereço pelo CEP (Mantido) ===
    const cepInput = document.querySelector("#cep");
    const buscarCepButton = document.querySelector("#buscarCep");
    
    // Função para buscar CEP
    const buscarEndereco = async () => {
        const cep = cepInput.value.replace(/\D/g, "");
        if (cep.length === 8) {
            limparErros(cepInput);
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const data = await response.json();

                if (data.erro) {
                    mostrarErro(cepInput, "CEP não encontrado. Digite manualmente.");
                    return;
                }

                // Preenche os campos
                const endereco = form.querySelector("#endereco");
                const cidade = form.querySelector("#cidade");
                const estado = form.querySelector("#estado");

                // Note: O seu HTML não tinha #bairro. Estou usando #endereco e #cidade.
                if (endereco) endereco.value = data.logradouro;
                if (cidade) cidade.value = data.localidade;
                if (estado) estado.value = data.uf;
                
            } catch (error) {
                mostrarErro(cepInput, "Erro ao buscar o CEP. Tente novamente ou digite manualmente.");
            }
        } else if (cep.length > 0) {
             mostrarErro(cepInput, "CEP deve ter 8 dígitos.");
        }
    };

    if (cepInput) {
        // Busca ao sair do campo (blur)
        cepInput.addEventListener("blur", buscarEndereco);
        
        // Busca ao clicar no botão
        if (buscarCepButton) {
            buscarCepButton.addEventListener("click", buscarEndereco);
        }
    }
});
