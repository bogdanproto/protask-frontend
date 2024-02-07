import React from 'react';
import { Formik, Field, Form } from 'formik';

export const CardForm = ({}) => {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          title: '',
          description: '',
          priority: '',
        }}
        onSubmit={() => {}}
      >
        <Form>
          <label htmlFor="title">First Name</label>
          <Field id="title" name="title" placeholder="Title" />

          <label htmlFor="description">Last Name</label>
          <Field
            id="description"
            name="description"
            placeholder="Description"
          />

          <div id="my-radio-group">Label color</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="priority" value="Low" />
              One
            </label>
            <label>
              <Field type="radio" name="priority" value="Medium" />
              Two
            </label>
            <label>
              <Field type="radio" name="priority" value="High" />
              Two
            </label>
            <label>
              <Field type="radio" name="priority" value="Without" />
              Two
            </label>
            <div>Picked: </div>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
