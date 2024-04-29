// Boleanos

const user = {
  name: "Diego Fernandes",
  height: 190,
  hasTicket: true,
};

const necessaryHeight = 130;

const currentHour = new Date().getHours();

const isParkClosed = currentHour < 9 || currentHour > 18;

if (isParkClosed) {
  throw new Error("O parque está fechado!");
}

const userHasNoTicket = !user.hasTicket;

if (!userHasNoTicket) {
  throw new Error("O Diego não possui um bilhete para entrar no parque!");
}

const cannotEnterToy = user.height < necessaryHeight;

if (cannotEnterToy) {
  throw new Error("O Diego não pode entrar no brinquedo!");
}

console.log("O Diego se divertiu muito! :)");
