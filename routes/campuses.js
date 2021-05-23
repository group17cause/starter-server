const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../database/models');

const ash = require('express-async-handler');

/** GET ALL CAMPUSES */

router.get('/', ash(async(req, res) => {
  let campuses = await Campus.findAll({include: [Student]});
  res.status(200).json(campuses);
}));

/** GET CAMPUS BY ID*/
router.get('/:id', ash(async(req, res) => {
  let campus = await Campus.findByPk(req.params.id, {include: [Student]});
  res.status(200).json(campus);
}));

/** Delete Campus by ID */
router.delete('/:id', ash(async(req, res) => {
  try {
    await Campus.destroy({
      where : {
        id : req.params.id
      }
    });
    res.status(200).json(`Succesfully Deleted Campus with id: ${req.params.id}`)
  } catch(error) {
    console.log(error);
  }
}));


// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;