import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { StudentConatiner, ProfilePicture, NewStudent } from './styled';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';
import Delete from '../../components/modal';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [id, setId] = useState('');
  const [index, setIndex] = useState('');

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  const handleDeleteAsk = (e, id, index) => {
    e.preventDefault();
    setId(id);
    setIndex(index);
    setIsDelete(true);
  };

  const handleDelete = async (e) => {
    e.persist();
    setIsLoading(true);
    try {
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      setIsLoading(false);
      toast.success('Aluno excuildo com sucesso');
    } catch (e) {
      const status = get(e, 'response.status', 0);

      if (status == 401) {
        toast.error('Para excluir o aluno é necessario efetuar o login');
      } else {
        toast.error('Ocorreu um erro ao excluir aluno');
        console.log(e.response);
      }
    }
    setIsDelete(false);
    setIsLoading(false);
  };

  const notDelete = () => setIsDelete(false);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>

      <NewStudent to="/aluno/">Novo aluno</NewStudent>

      <StudentConatiner>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img crossOrigin="" src={aluno.Fotos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} color="#C3073F" />
            </Link>

            <Link
              onClick={(e) => handleDeleteAsk(e, aluno.id, index)}
              to={`/aluno/${aluno.id}/delete`}
            >
              <FaWindowClose size={16} color="#C3073F" />
            </Link>
            <Delete
              isDelete={isDelete}
              handleDelete={handleDelete}
              notDelete={notDelete}
            />
          </div>
        ))}
      </StudentConatiner>
    </Container>
  );
}
