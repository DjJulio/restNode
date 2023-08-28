const { response, request } = require("express");
const Guests = require("../models/guests");

const guestGet = async (req = request, res = response) => {
  const { id } = req.params;
  const guest = await Guests.findById(id);
  res.json({
    statusText: "Get Guest API",
    data: guest,
  });
};

const guestsGet = async (req = request, res = response) => {
  const query = req.query;
  const allGuests = await Guests.find();
  res.json({
    statusText: "Get Guests API",
    data: allGuests,
  });
};

const guestPost = async (req, res = response) => {
  const { name, phone, tickets } = req.body;

  const checkIfExist = await Guests.find({ name });

  if (checkIfExist.length) {
    res.status(409).json({
      statusText: `Usuario: ${name} ya existe`,
    });

    return;
  }

  const guest = new Guests({ name, phone, tickets, createdDate: new Date() });

  await guest.save();

  res.json({
    statusText: `Invitado ${guest.name} guardado correctamente`,
    data: guest,
  });
};

const guestDelete = async (req, res = response) => {
  const { id } = req.params;
  const guest = await Guests.findByIdAndDelete(id);
  res.json({
    statusText: `${guest.name} Borrado correctamente`,
  });
};

const guestPut = async (req, res = response) => {
  const { id } = req.params;
  const { _id, ...guestData } = req.body;

  const updatedGuest = {
    ...guestData,
    updatedDate: new Date(),
  };

  const guest = await Guests.findByIdAndUpdate(id, updatedGuest);

  res.json({
    statusText: `Invitado: ${guest.name} ha sido actualizado correctamente`,
    data: guest,
  });
};

const guestConfirmPut = async (req, res = response) => {
  const { id } = req.params;
  const { confirm } = req.body;

  const updatedGuest = {
    confirm,
    updatedDate: new Date(),
  };

  const guest = await Guests.findByIdAndUpdate(id, updatedGuest);

  res.json({
    statusText: `Invitado: ${guest.name} ha sido actualizado correctamente`,
    data: guest,
  });
};

module.exports = {
  guestGet,
  guestsGet,
  guestPost,
  guestDelete,
  guestPut,
  guestConfirmPut,
};
