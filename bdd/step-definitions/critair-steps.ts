import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';


enum CARBURANT {
    DIESEL = 'DIESEL', SUPER = 'SUPER', ELECTRICITE = 'ELECTRICITE'
}

class Vehicule {
    public vignette: number;
    constructor(public age: number, public cylindree: number, public carburant: CARBURANT) {
        this.vignette = CritairManager.computeVignette(this);
    }
}

class CritairManager {
    public static computeVignette(vehicule: Vehicule): number {
        let result: number;
        if (vehicule.carburant === CARBURANT.ELECTRICITE) {
            result = 0;
        } else if (vehicule.carburant === CARBURANT.DIESEL) {
            result = 3;
        } else if (vehicule.age <= 10) {
            result = 1;
        }
        return result;
    }
}

@binding()
export class CritairSteps {
    private vehicule: Vehicule;

    @given(/Une voiture de (\d*) ans avec une cylindrée de (\d*) cm3 et consommant du ([^"]*)/)
    public givenUneVoiture(age: number, cylindree: number, carburant: CARBURANT) {
        this.vehicule = new Vehicule(age, cylindree, carburant);
    }

    @when(/La vignette critair lui est attribuée/)
    public whenVignetteAttribuee() {
        // nothing to do here
    }

    @when(/Cette vignette doit être de niveau (\d)/)
    public thenVignetteAttribueeCorrecte(niveauCritair: number) {
        assert.equal(this.vehicule.vignette, niveauCritair);
    }

}
