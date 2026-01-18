import React from 'react'

const contacts = [
  {
    name: "Rishabh",
    phone: "7340553614"
  },
  {
    name: "Rishabh",
    phone: "7340553614"
  },
  {
    name: "Rishabh",
    phone: "7340553614"
  },
  {
    name: "Rishabh",
    phone: "7340553614"
  },
]

const Contact = () => {
  return (
    <section className='overflow-hidden py-32 relative'>
      <div className='glass text-center'>
        {contacts.map((ct, id) => (
          <div key={id}>
            <span>{ct.name}</span>
            <span>{ct.phone}</span>
          </div>
        ))};
      </div>
    </section>
  )
}

export default Contact