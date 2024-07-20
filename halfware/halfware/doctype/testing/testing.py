# Copyright (c) 2024, rayan aouf  and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class testing(Document):
	def validate(self):
            frappe.msgprint("hello frappe")
            self.company = "halfware"
