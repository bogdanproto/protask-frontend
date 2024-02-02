import { Notify } from 'notiflix';


export const handleSubmit = e => {
    e.preventDefault();

  const form = e.currentTarget;
  
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(`${originalPromiseResult.user.name} welcome back!`);
      })
      .catch(() => {
        Notify.failure('Incorrect login or password');
      });

    form.reset();
};

export default handleSubmit;
  
