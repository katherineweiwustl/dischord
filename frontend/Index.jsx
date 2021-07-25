import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App/>, root);
});
{/* <header>
    <% if logged_in? %>
      <form method="POST" action=<%= session_url %>>
        <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">
        <input type="hidden" name="_method" value="DELETE"> <!-- Use this if method needs to be PUT/PATCH or DELETE  -->
        <button type = "submit">log out</button>
      </form>
    <% else %>
      <form method="POST" action=<%= session_url %>>
        <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">
        <label>
          username
          <input name="user[username]" type="text"/>
        </label>
        <label>
          password
          <input name="user[password]" type="password"/>
        </label>
        <button type="submit">
        login
        </button>
      </form>
    <% end %>
  </header> */}