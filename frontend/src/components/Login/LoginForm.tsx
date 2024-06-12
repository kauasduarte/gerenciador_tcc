import { Link , useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export function LoginForm() {

    const [cadastro, setCadastro] = useState({
        tipo_usuario: '',
        name: '', 
        last_name: '', 
        cpf: '',
        birth: '', 
        email: '', 
        password: '', 
        curso: '', 
        instituicao: '', 
        departamento: '', 
        matricula: '', 
        data_ingresso: '', 
    });
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    async function gravar(e) {
        e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/register',
        { 
          tipo_usuario: cadastro.tipo_usuario,
          name: cadastro.name,
          last_name: cadastro.last_name,
          cpf: cadastro.cpf,
          birth: cadastro.birth,
          email: cadastro.email,          
          password: cadastro.password,
          curso: cadastro.curso,
          instituicao: cadastro.instituicao,
          departamento: cadastro.departamento,
          matricula: cadastro.matricula,
        },
        config
      );

      

      setStatus('cadastro realizado');
      alert('Usuário cadastrado com sucesso!');
      setCadastro({});

      // Aqui você pode verificar se a resposta contém o id
      const { user } = response.data;
      console.log(user);

      // Armazene o id do usuário no cookie
      Cookies.set('user_id', user.id, { expires: 7 });

      // Redireciona para a página desejada
      navigate('/bemvindo');
    } catch (error) {
      setStatus(`Falha: ${error}`);
      alert(`Falha: ${error}`);
    }
  }

    return(
        <>
        <div className={styles.conteudo}>
            <p className={styles.message}>
                <span>Bem-vindo(a)</span>
            </p>

            <p>
                <p>Tem uma conta?</p>
                <p className={styles.textDestaque}><Link to="/">Entre</Link></p>
            </p>

        </div>

        <p className={styles.textLogin}>Cadastro</p>

        <form onSubmit={gravar} className={styles.loginForm}>
        <div className="form-group">
            <label htmlFor="tipoInput">Tipo de Usuário:</label>
            <select
                name="tipo_usuario"
                id="tipoInput"
                value={cadastro.tipo_usuario || ''}
                className="form-control"
                onChange={(e) => setCadastro({ ...cadastro, tipo_usuario: e.target.value })}
                required
            >
                <option value="">Selecione...</option>
                <option value='aluno' label="Aluno">Aluno</option>
                <option value='orientador' label="Orientador">Orientador</option>
                <option value="banca" label='Banca Avaliadora'>Banca Avaliadora</option>
                <option value='coordenador' label="Coordenador">Coordenador</option>
            </select>
        </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor= "nameInput">Nome</label>
                  <input 
                      name='name'
                      type='text' 
                      id='nameInput'
                      placeholder='Nome' 
                      value={cadastro.name || ''}
                      className='form-control'
                      onChange={(e) => setCadastro({...cadastro, name:e.target.value})}
                      required/>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="lastnameInput">Sobrenome</label>
                  <input 
                      name='last_name'
                      type='text'
                      id='lastnameInput' 
                      placeholder='Sobrenome' 
                      value={cadastro.last_name || ''}
                      className="form-control"
                      onChange={(e) => setCadastro({...cadastro, last_name:e.target.value})}
                      required/>
                </div>
              </div>
          </div>
          <div className="form-group">
            <label htmlFor="cpfInput">CPF</label>
            <input 
                name='CPF'
                type='text'
                id='cpfInput' 
                placeholder='' 
                value={cadastro.cpf || ''}
                className='form-control'
                onChange={(e) => setCadastro({...cadastro, cpf:e.target.value})}
                required/>    
          </div>
          <div className="form-group">
            <label htmlFor="birthInput">Data de Nascimento</label>
            <input 
                name='birth'
                type='date'
                id='birthInput' 
                placeholder='' 
                value={cadastro.birth || ''}
                className='form-control'
                onChange={(e) => setCadastro({...cadastro, birth:e.target.value})}
                required/>    
          </div>
          <div className="form-group">
            <label htmlFor = "inputEmail">Email</label>
            <input 
                name='email'
                id ='inputEmail'
                placeholder='Informe seu email' 
                value={cadastro.email || ''}
                className="form-control"
                onChange={(e) => setCadastro({...cadastro, email:e.target.value})}
                required/>
          </div>
          <div className="form-group">
            <label htmlFor='passwordInput'>Senha</label>
            <input 
                name='password'
                type='password' 
                placeholder='Crie uma senha'
                id='passwordInput'
                value={cadastro.password || ''}
                className='form-control'
                onChange={(e) => setCadastro({...cadastro, password:e.target.value})}
                required/>
          </div>   
          <div className="form-group">
            <label htmlFor='cursoInput'>Curso</label>
            <input 
                name='curso'
                type='text' 
                placeholder='Informe seu curso'
                id='cursoInput'
                value={cadastro.curso || ''}
                className='form-control'
                onChange={(e) => setCadastro({...cadastro, curso:e.target.value})}
                required/>
          </div> 
          <div className="form-group">
            <label htmlFor='instituicaoInput'>Instituição</label>
            <input 
                name='instituicao'
                type='text' 
                placeholder='Informe sua instituição'
                id='instituicaoInput'
                value={cadastro.instituicao || ''}
                className='form-control'
                onChange={(e) => setCadastro({...cadastro, instituicao:e.target.value})}
                required/>
          </div> 
          <div className="form-group">
            <label htmlFor='departamentoInput'>Departamento</label>
            <input 
                name='departamento'
                type='text' 
                placeholder='Informe seu departamento'
                id='departamentoInput'
                value={cadastro.departamento || ''}
                className='form-control'
                onChange={(e) => setCadastro({...cadastro, departamento:e.target.value})}
                />
          </div> 
          <div className="form-group">
            <label htmlFor='matriculaInput'>Matrícula</label>
            <input 
                name='matricula'
                type='text' 
                placeholder='Informe sua matrícula'
                id='matriculaInput'
                value={cadastro.matricula || ''}
                className='form-control'
                onChange={(e) => setCadastro({...cadastro, matricula:e.target.value})}
                required/>
          </div>

          <div className={styles.centerButton}>
            <button type="submit" className="btn btn-lg btn-block">Cadastrar</button>
          </div>
        </form>
        </>
    )
}