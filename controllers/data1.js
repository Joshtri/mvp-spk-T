exports.data1_Page = (req,res)=>{
    res.render('data_1',
    {
        // notif condition.
        notifSuksesTambah : false
    });
}

exports.addData1_Page = (req,res)=>{
    res.render('add_data_1',{
        
    });
}


//API TAMBAH DATA 

exports.post_Data1 = (req,res)=>{
    
    res.render('data_1',{
        notifSuksesTambah : true
    });
}