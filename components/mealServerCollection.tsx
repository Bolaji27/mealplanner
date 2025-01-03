"use server"

export async function getData(formData:FormData) {
    const houseHoldNo = formData.get("householdno");
    const meal = formData.get("meal");
    const beverages = formData.get("beverage");
    const fruits = formData.get("fruit");
    const snacks = formData.get("snacks");
}