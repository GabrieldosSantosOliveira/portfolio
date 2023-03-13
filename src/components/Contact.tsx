import { contacts } from '../../contacts';
import { Social } from './Social';

export const Contact = () => {
  return (
    <div id="contact" className="h-[50vh] flex justify-center items-center">
      <section className="flex flex-1 justify-between px-28">
        {contacts.map((contact, index) => {
          return <Social {...contact} key={index} />;
        })}
      </section>
    </div>
  );
};
