// importações

import {describe, it, expect} from 'vitest';
import {mount} from '@vue/test-utils';
import Aluno from '../Aluno.vue';

// Inicializando os testes

describe('Aluno', () =>{
    // 1ª verificar o valor da variavel

    it('Verificando o valor da variável', () =>{
        // Obeter o componente
        const componente = mount(Aluno);

        // Chamar a função que altera o valor da variavel

        componente.vm.altNome();
        // Realizar o teste
        expect(componente.vm.nome).toBe('Mauro');
    })

    // 2ª Verificar a média

    it('Verificar a média', () => {
        // Obter o componente
        const componente = mount(Aluno);

        // Executar o testes
        expect(componente.vm.media(7, 9)).toBe(8)
    });

    // 3ª Verificar a situação
    it('Verificar a situação', () =>{
        // Obert componente

        const componente = mount(Aluno);

        // Executar o teste
        expect(componente.vm.situacao(6.1)).toBe('Em exame');
    })

    // 4ª teste verificar media e situacao

    it('Verificar a media e a situacao', () =>{

        // Obert componente

        const componente = mount(Aluno);

        // Obert a media
        const media = componente.vm.media(10, 10);

        // Obert a situacao
        const situacao = componente.vm.situacao(media);


        // Executar o teste        
        expect(situacao).toBe('Aprovado(a)');
        // expect(componente.vm.media(10, 10)).toBe(10);

    });
})