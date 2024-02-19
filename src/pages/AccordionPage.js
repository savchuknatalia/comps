import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: '1',
      label: 'Some label',
      content: 'some text'
    },
    {
      id: '2',
      label: 'Some label',
      content: 'some text'
    },
    {
      id: '3',
      label: 'Some label',
      content: 'some text'
    },
  ];

  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
}

export default AccordionPage;
