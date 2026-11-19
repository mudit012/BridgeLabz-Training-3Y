// Q4 - Custom Form Builder using a class and innerHTML

class FormBuilder {
  constructor(fields, container) {
    this.fields = fields;       // array of field objects
    this.container = container; // element where the form will be placed
    this.render();
  }

  // builds the form HTML from the fields array
  render() {
    let html = '<form id="dynamicForm">';
    this.fields.forEach((field, index) => {
      html += `
        <label>${field.label}</label>
        <input type="${field.type}" name="field${index}" data-label="${field.label}">
      `;
    });
    html += '<button type="submit">Submit</button></form>';
    this.container.innerHTML = html;

    // submit handler is added after the form exists in the DOM
    this.form = this.container.querySelector("#dynamicForm");
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = this.getFormData();
      console.log(data);
      const output = document.getElementById("output");
      output.style.display = "block";
      output.textContent = JSON.stringify(data, null, 2);
    });
  }

  // returns all entered values as an object { label: value }
  getFormData() {
    const data = {};
    this.form.querySelectorAll("input").forEach((input) => {
      data[input.dataset.label] = input.value;
    });
    return data;
  }
}

// fields can be changed to anything
const fields = [
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" },
  { type: "number", label: "Age" },
];

new FormBuilder(fields, document.getElementById("formContainer"));
