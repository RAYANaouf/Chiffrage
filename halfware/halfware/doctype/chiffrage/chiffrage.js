// Copyright (c) 2024, rayan aouf  and contributors
// For license information, please see license.txt




frappe.ui.form.on('Chiffrage', {

//	refresh(frm) {
// 		frappe.msgprint("hello refresh")
//	},


        //onload : function (frm){
	  //  frappe.msgprint("hello onload")
	//},

	marge_type : function(frm){

            frappe.msgprint("hello");

	    if(frm.doc.marge_type == "Percent"){
	       frm.toggle_display('marge_percentage',true)
	       frm.toggle_display('marge_montant',false)
	    }
	    else if(frm.doc.marge_type == "Montant"){
	       frm.toggle_display('marge_percentage',false)
	       frm.toggle_display('marge_montant',true)
	    }


	},


	risque_type : function(frm){

            //frm.msgprint("hello");

	    if(frm.doc.risque_type == "Taux"){
	       frm.toggle_display('risque_taux',true)
	       frm.toggle_display('risque_montant',false)
	    }
	    else if(frm.doc.risque_type == "Montant"){
	       frm.toggle_display('risque_taux',false)
	       frm.toggle_display('risque_montant',true)
	    }

	},


        //services_cost_cost : function(frm){
        //	frappe.msgprint("hello world");
        //},
        
        'services.*' : function(frm){
         frappe.msgprint("hellllooooo");
        },

        //chiffre_daffaire_desc : function(frm){
        //    frappe.msgprint("chiffre d'affaire");
        //},


    // material_on_form_rendered(frm) { // "links" is the name of the table field in ToDo, "_add" is the event

    //     frappe.msgprint('A row has been added to the mterial table 🎉 ');

    // }


})



////////////////////////////////////////////////////////////////////////////////////

// // General approach to catch all child table row additions
// frappe.ui.form.on('chiffrage', 'child_table_material_add', function(frm, cdt, cdn) {
// 	frappe.msgprint('A row has been added to the child table 🎉');
// 	console.log("Child table row added");
// });


//////////////////// chiffrage_hardware  //////////////////////////////////////


frappe.ui.form.on('ChiffrageHardware', { // The child table is defined in a DoctType called "Dynamic Link"
    materials_remove(frm){
        calculate_total_hardware_cost(frm);
    },

    quantity: function(frm,cdt,cdn){
	let c = locals[cdt][cdn];
	frappe.model.set_value(cdt,cdn, "total_cost",c.unit_price * c.quantity);
        calculate_total_hardware_cost(frm);
    },

    unit_price(frm){
        calculate_total_hardware_cost(frm);
    },

});


//////////////////// chiffrage service  //////////////////////////////////////

frappe.ui.form.on('ChiffrageService',{

    services_add(frm){
        //frm.toggle_display('services_cost_cost',true);
        calculate_total_service_cost(frm)
    },
    

    services_remove(frm){
        //frm.toggle_display('services_cost_cost',false);
        calculate_total_service_cost(frm);
    },

    cost(frm){
       console.log('cost field change');
       calculate_total_service_cost(frm);
    },

    

})

///////////////////// human resources ////////////////////

frappe.ui.form.on('ChiffrageHumanResource',{
    
    human_resources_add(frm){
        frm.toggle_display('human_resources_cost',true)
    },
    
    human_resources_remove(frm){
        frm.toggle_display('human_resources_cost',false)
    }
})



////////////////////// functions   ////////////////////////////



function calculate_total_service_cost(frm) {

    let total_cost = 0;

    frm.doc.services.forEach(service => {
        total_cost += flt(service.cost);
    });

    frm.set_value('services_cost_cost', total_cost);

}


function calculate_total_hardware_cost(frm){

      let total_cost = 0; 

      frm.doc.materials.forEach(material => {

        total_cost +=  flt(material.total_cost);

      });

      frm.set_value( "materials_cost" , total_cost);

}
