export const fetchingByNameOrId = async (nameOrId) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
    alert('Ocorreu um erro inesperado, por favor reinicie a página :(')
  }
};