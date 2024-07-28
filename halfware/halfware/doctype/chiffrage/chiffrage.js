// Copyright (c) 2024, rayan aouf  and contributors
// For license information, please see license.txt




frappe.ui.form.on('Chiffrage', {

	refresh(frm) {
// 		frappe.msgprint("hello refresh")
	},
	
	onload : function (frm){
	   // frappe.msgprint("hello onload")
	},
	
	
	marge_type : function(frm){
	    
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
	    
	    if(frm.doc.risque_type == "Taux"){
	       frm.toggle_display('risque_taux',true)
	       frm.toggle_display('risque_montant',false)
	    }
	    else if(frm.doc.risque_type == "Montant"){
	       frm.toggle_display('risque_taux',false)
	       frm.toggle_display('risque_montant',true)
	    }
	    
	},
	
	
	
	    
    // material_on_form_rendered(frm) { // "links" is the name of the table field in ToDo, "_add" is the event
    
    //     frappe.msgprint('A row has been added to the mterial table 🎉 ');
        
    // }
    
    
})





// // General approach to catch all child table row additions
// frappe.ui.form.on('chiffrage', 'child_table_material_add', function(frm, cdt, cdn) {
// 	frappe.msgprint('A row has been added to the child table 🎉');
// 	console.log("Child table row added");
// });


//////////////////// chiffrage_hardware  //////////////////////////////////////


frappe.ui.form.on('ChiffrageHardware', { // The child table is defined in a DoctType called "Dynamic Link"
    
    
    material_add(frm) {
        frm.toggle_display('materials_cost',true)
    },
    
    material_remove(frm){
        frm.toggle_display('materials_cost',false)
    }
    
});


//////////////////// chiffrage service  //////////////////////////////////////

frappe.ui.form.on('ChiffrageService',{
    
    service_add(frm){
        frm.toggle_display('services_cost_cost',true)
    },
    
    service_remove(frm){
        frm.toggle_display('services_cost_cost',false)
    }
    
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
