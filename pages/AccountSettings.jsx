import "../styles/styles.css";

function AccountSettings({ user }) {

  if (!user) return <h2>No user logged in</h2>;

  return (

    <div className="container">

      <h2>Account Settings</h2>

      <div className="profileBox">

        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <div>

          <h3>{user.name}</h3>

          <p>{user.email}</p>

          <p>Agency: {user.agency}</p>

        </div>

      </div>

    </div>

  );
}

function logout() {

  localStorage.removeItem("popxUser");

  window.location.href = "/";

}

<button
  className="secondaryBtn"
  onClick={logout}
>
  Logout
</button>

export default AccountSettings;