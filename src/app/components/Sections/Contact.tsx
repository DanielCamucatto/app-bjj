'use client'
import { useForm } from 'react-hook-form';
import { useTheme } from '@/app/contexts/ThemeContext';

interface IFormInputs {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

const Contact = () => {
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    // Aqui você pode implementar a lógica de envio do formulário
  };

  return (
    <div className="hero bg-base-200 min-h-screen" id="contact">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className={`text-5xl m-4 font-bold ${theme === "black" ? "text-white" : "text-black"}`}>
            Vamos conversar?
          </h1>
          <p className={`py-6 m-4 ${theme === "black" ? "text-white" : "text-black"}`}>
            Quer começar sua jornada no Jiu-Jitsu ou tem alguma dúvida? 
            Entre em contato conosco! Estamos prontos para ajudar você a 
            dar o primeiro passo nessa arte marcial transformadora. 
            Responderemos sua mensagem em até 24 horas.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nome</span>
              </label>
              <input
                type="text"
                placeholder="Seu nome completo"
                className={`input input-bordered ${errors.nome ? 'input-error' : ''}`}
                {...register('nome', { required: 'Nome é obrigatório' })}
              />
              {errors.nome && (
                <span className="text-error text-sm mt-1">{errors.nome.message}</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
                {...register('email', {
                  required: 'Email é obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido'
                  }
                })}
              />
              {errors.email && (
                <span className="text-error text-sm mt-1">{errors.email.message}</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Telefone</span>
              </label>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                className={`input input-bordered ${errors.telefone ? 'input-error' : ''}`}
                {...register('telefone', {
                  required: 'Telefone é obrigatório',
                  pattern: {
                    value: /^\(\d{2}\) \d{5}-\d{4}$/,
                    message: 'Formato: (00) 00000-0000'
                  }
                })}
              />
              {errors.telefone && (
                <span className="text-error text-sm mt-1">{errors.telefone.message}</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Mensagem</span>
              </label>
              <textarea
                placeholder="Sua mensagem"
                className={`textarea textarea-bordered h-24 ${errors.mensagem ? 'textarea-error' : ''}`}
                {...register('mensagem', { required: 'Mensagem é obrigatória' })}
              />
              {errors.mensagem && (
                <span className="text-error text-sm mt-1">{errors.mensagem.message}</span>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-info">Enviar mensagem</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;