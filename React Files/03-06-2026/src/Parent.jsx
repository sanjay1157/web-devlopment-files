import Child from "./Child";

function Parent({ user }) {
  return (
    <div>
      <p>Parent Component</p>
      <Child user={user} />
    </div>
  );
}

export default Parent;