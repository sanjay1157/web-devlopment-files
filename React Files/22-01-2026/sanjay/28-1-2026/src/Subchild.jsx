const Subchild = ({ two = {}, value = {} }) => {

  const { name, age, city } = two
  console.log(two)
  const { fruit } = value
  console.log(value)

  return (
    <section>
      <div>{name}</div>
      <div>{age}</div>
      <div>{city}</div>
      <div>{fruit}</div>
    </section>
  )
}

export default Subchild
