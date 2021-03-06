import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('Componente principal', () => {
    describe('Quando eu abro o app do banco', () => {

        it('Quando eu abro o nome do banco, o nome é exibido', () => {
            render(<App />);
    
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        })
    
        it('Quando eu abro o app do banco o saldo é exibido', () => {
            render(<App />);
        
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        })
    
        it('Quando eu abro o app do banco o botão de realizar a transação é exibido', () => {
            render(<App />);
        
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        })
    })
})
