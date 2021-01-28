describe("Customers page", () => {
  beforeEach(() => {
    cy.visit("/customers2")
  })

  it("shows the table", () => {
    cy.get("tr").should("have.length", 1000)
  })
})