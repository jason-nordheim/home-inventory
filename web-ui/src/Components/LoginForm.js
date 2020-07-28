import React from 'react' 

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem 1rem",
    justifyItems: "center",
  },
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingBottom: '1rem'
  },
  label: {
    width: '25%',   
    textAlign: 'right', 
    paddingRight: '1rem'
  }, 
  input: {
    width: '75%'
  }
};

export function LoginForm() {
  return (
    <form style={styles.form}>
      <section style={styles.section}>
        <label style={styles.label} htmlFor="username">
          Username
        </label>
        <input style={styles.input} htmlFor="username" placeholder="username" />
      </section>
      <section style={styles.section}>
        <label style={styles.label} htmlFor="password">
          Password
        </label>
        <input style={styles.input} htmlFor="passowrd" type="password" placeholder="password" />
      </section>
      <section style={styles.section}>
        <button style={{width: '25%'}}>Login</button>
      </section>
    </form>
  );
}
