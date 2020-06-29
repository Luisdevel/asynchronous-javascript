axios('pessoas.json')
.then(answer => loadElementPage(answer.data));

function loadElementPage(json) {
  const table = document.createElement('table');

  for(let people of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = people.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = people.nome;
    td.innerHTML = people.email;
    tr.appendChild(td);

    table.appendChild(tr);
  };

  const result = document.querySelector('.resultado');
  result.appendChild(table);
};