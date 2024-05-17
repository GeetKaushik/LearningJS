const insert = document.getElementById('insert')
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
      <table class='keyinfo'>
        <tr>
          <th>Key</th>
          <th>Code </th>
        </tr>
        <tr>
          <th>${e.key === ' ' ? 'Space' : e.key}</th>
          <th>${e.code}</th>
        </tr>
      </table>
  `
})
