const Group = require("../models/dash.js")

exports.creategroup = (req, res)=>{
const group =  new Group(req.body) ;
group.save((error, group)=>{
	if (error) {
      return res.status(400).json({
        error: error,
      });
  	}else {
  		res.json({
  			groupname: group.groupnames,
  			description: group.description,
  			link: group.link,
  			id: group._id

  		})
  	}
})
}

exports.getAllGroup = (req, res)=>{
	Group.find().exec((err, groups)=>{
		if(err || !groups){
			return res.status(400).json({
				err: "No group"
			})
		}res.json(groups)
	})
}