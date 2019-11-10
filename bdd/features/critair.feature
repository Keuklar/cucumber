Feature: Gestion de la pollution
  Afin de sauver la planête
  En tant qu'état responsable
  Je vais taxer les véhicules polluant
 
 
 Scenario Outline: Attribution vignette critair
    Given Une voiture de <age> ans avec une cylindrée de <cylindree> cm3 et consommant du <carburant>
    When La vignette critair lui est attribuée
    Then Cette vignette doit être de niveau <critair>

    Examples:
      | age | cylindree | carburant   | critair |
      | 10  |    1000   |   SUPER     |    1    |
      | 20  |    2000   |   DIESEL    |    3    |
      | 30  |    3000   | ELECTRICITE |    0    |