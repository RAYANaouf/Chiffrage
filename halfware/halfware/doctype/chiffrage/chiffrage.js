// Copyright (c) 2024, rayan aouf  and contributors
// For license information, please see license.txt




frappe.ui.form.on('Chiffrage', {


	marge_type : function(frm){

	    if(frm.doc.marge_type == "Percent"){
	       frm.toggle_display('marge_percentage',true);
	       frm.toggle_display('marge_montant',false);
	    }
	    else if(frm.doc.marge_type == "Montant"){
	       frm.toggle_display('marge_percentage',false);
	       frm.toggle_display('marge_montant',true);
	    }

            calculate_total_project_cost(frm);


	},


	risque_type : function(frm){

	    if(frm.doc.risque_type == "Taux"){
	       frm.toggle_display('risque_taux',true);
	       frm.toggle_display('risque_montant',false);
	    }
	    else if(frm.doc.risque_type == "Montant"){
	       frm.toggle_display('risque_taux',false);
	       frm.toggle_display('risque_montant',true);
	    }

	   calculate_total_project_cost(frm);

	},

	risque_taux : function(frm){
		calculate_total_project_cost(frm);
	},

	risque_montant : function(frm){
		calculate_total_project_cost(frm);
	},

	marge_percentage : function(frm){
		calculate_total_project_cost(frm);
	},

	marge_montant : function(frm){
		calculate_total_project_cost(frm);
	},


	services_cost_cost : function(frm){
		calculate_total_project_cost(frm);
	},


	materials_cost : function(frm){

                calculate_total_project_cost(frm);

        },

        human_resources_cost : function(frm){

		calculate_total_project_cost(frm);

	},

	additional_bills_cost : function(frm){
		calculate_total_project_cost(frm);
	},


});


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

    unit_price: function(frm,cdt,cdn){
        let c = locals[cdt][cdn];
        frappe.model.set_value(cdt,cdn,"total_cost",flt(c.unit_price) * flt(c.quantity) );
        calculate_total_hardware_cost(frm);
    },

})


//////////////////// chiffrage service  //////////////////////////////////////

frappe.ui.form.on('ChiffrageService',{


    services_remove(frm){
        calculate_total_service_cost(frm);
    },

    cost(frm){
       calculate_total_service_cost(frm );
    },

})

///////////////////// human resources /////////////////////////////////////


frappe.ui.form.on('ChiffrageHumanResource',{

    human_resources_remove(frm){
        human_resources_cost(frm);
    },

    salary_by_hour : function(frm , cdt , cdn ){
    	let c = locals[cdt][cdn];
        frappe.model.set_value(cdt , cdn , "total_cost" , flt(c.salary_by_hour) * flt(c.working_hours_estimation) )
        calculate_total_resource_cost(frm);
    },

    working_hours_estimation : function(frm ,cdt ,cdn){
       let c = locals[cdt][cdn]
       frappe.model.set_value(cdt , cdn , "total_cost" , flt(c.salary_by_hour) * flt(c.working_hours_estimation))
       calculate_total_resource_cost(frm);
   },

})


/////////////////////  others   /////////////////////////////////////////


frappe.ui.form.on('chiffrage_others' , {
	others_remove(frm){
		calculate_total_resource_cost(frm);
	},
	cost : function(frm , cdt , cdn ){
		calculate_total_resource_cost(frm);
        },
})


//////////////////////  additional bills //////////////////////
frappe.ui.form.on('Chiffrage_Additional_Bills' , {
	additional_bills_cost_remove(frm){
		calculate_total_resource_cost(frm);
	},
	cost : function(frm , cdt , cdn){
		 calculate_total_additional_bills(frm)
	},
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

      })

      frm.set_value( "materials_cost" , total_cost);

}

function calculate_total_resource_cost(frm){

	let total_cost = 0 ;

        frm.doc.human_resources.forEach(resource => {

		total_cost += flt(resource.total_cost);

        });

        frm.doc.others.forEach(other => {

        	total_cost += flt(other.cost);

        });

	frm.set_value( "human_resources_cost" , total_cost);
}



//calcule total  aditional  bills

function calculate_total_additional_bills(frm){

        let total_cost = 0 ;

        frm.doc.bills.forEach(bill => {

                total_cost += flt(bill.cost);

        });


        frm.set_value( "additional_bills_cost" , total_cost);
}

//end

function calculate_total_project_cost(frm){

	let total_cost = 0;
	let marge      = 0;
        let risk       = 0;
	let additional_bill = 0;

	total_cost = flt(frm.doc.services_cost_cost) + flt(frm.doc.materials_cost) + flt(frm.doc.human_resources_cost) ;

	if(frm.doc.marge_type == "Percent"){
                marge = flt(total_cost * frm.doc.marge_percentage / 100 );
	}
        else{
		marge = flt(frm.doc.marge_montant);
	}

	if(frm.doc.risque_type == "Taux"){
		let percentage = flt(frm.doc.risque_taux / 100);
		risk =   total_cost * percentage;
	}
	else{
		risk = flt(frm.doc.risque_montant);
	}


        total_cost = total_cost + flt(frm.doc.additional_bills_cost) + flt(risk) + flt(marge) ;

	frm.set_value("total_project_cost" , total_cost );

}
