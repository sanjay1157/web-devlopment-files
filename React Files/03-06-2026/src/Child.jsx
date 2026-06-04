import GrandChild from "./GrandChild";

function Child({ user }) {
  return (
    <div>
      <p>Child Component</p>
      <GrandChild user={user} />
    </div>
  );
}

export default Child;