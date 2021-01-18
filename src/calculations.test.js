import {calculateBiorhythm} from '.calculations';

it('calculates the biorhythm', () => {
    const result = calculateBiorhythm('1995-01-01', '2020-02-18');
    expect(result).toBeCloseTo(0.5196);
});


it('calculates the emotional biorhythm', () => {
    const result = calculateBiorhythm('1995-01-01', '2020-02-18');
    expect(result).toBeCloseTo(-0.9010);
});

it('calculates the intellectual biorhythm', () => {
    const result = calculateBiorhythm('1995-01-01', '2020-02-18');
    expect(result).toBeCloseTo(0.8146);
}); 