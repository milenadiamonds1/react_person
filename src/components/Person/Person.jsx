import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    partnerName,
    isMarried,
  } = person;

  const checkSex = sex === 'f'
    ? 'husband'
    : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age > 0 && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${checkSex}`
          : 'I am not married'}
      </p>
    </section>
  );
};
