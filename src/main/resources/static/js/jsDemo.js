/**
 * 
 */

const changeTitle = () => {
  const appTitle = document.getElementById('appTitle')
  const changeTitle = document.getElementById('changeTitle')
  const changeButton = document.getElementById('changeButton')
  
  changeButton.addEventListener('click', () => {
    appTitle.textContent = changeTitle.value;
  })
}

changeTitle()
