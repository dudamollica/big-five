import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [answer1, setAnswer1] = useState(0);
    const [answer2, setAnswer2] = useState(0);
    const [answer3, setAnswer3] = useState(0);
    const [answer4, setAnswer4] = useState(0);
    const [answer5, setAnswer5] = useState(0);
    const [answer6, setAnswer6] = useState(0);
    const [answer7, setAnswer7] = useState(0);
    const [answer8, setAnswer8] = useState(0);
    const [answer9, setAnswer9] = useState(0);
    const [answer10, setAnswer10] = useState(0);
    const [answer11, setAnswer11] = useState(0);
    const [answer12, setAnswer12] = useState(0);
    const [answer13, setAnswer13] = useState(0);
    const [answer14, setAnswer14] = useState(0);
    const [answer15, setAnswer15] = useState(0);
    const [answer16, setAnswer16] = useState(0);
    const [answer17, setAnswer17] = useState(0);
    const [answer18, setAnswer18] = useState(0);
    const [answer19, setAnswer19] = useState(0);
    const [answer20, setAnswer20] = useState(0);
    const [answer21, setAnswer21] = useState(0);
    const [answer22, setAnswer22] = useState(0);
    const [answer23, setAnswer23] = useState(0);
    const [answer24, setAnswer24] = useState(0);
    const [answer25, setAnswer25] = useState(0);
    const [answer26, setAnswer26] = useState(0);
    const [answer27, setAnswer27] = useState(0);
    const [answer28, setAnswer28] = useState(0);
    const [answer29, setAnswer29] = useState(0);
    const [answer30, setAnswer30] = useState(0);
    const [answer31, setAnswer31] = useState(0);
    const [answer32, setAnswer32] = useState(0);
    const [answer33, setAnswer33] = useState(0);
    const [answer34, setAnswer34] = useState(0);
    const [answer35, setAnswer35] = useState(0);
    const [answer36, setAnswer36] = useState(0);
    const [answer37, setAnswer37] = useState(0);
    const [answer38, setAnswer38] = useState(0);
    const [answer39, setAnswer39] = useState(0);
    const [answer40, setAnswer40] = useState(0);
    const [answer41, setAnswer41] = useState(0);
    const [answer42, setAnswer42] = useState(0);
    const [answer43, setAnswer43] = useState(0);
    const [answer44, setAnswer44] = useState(0);
    const [extroversao, setExtroversao] = useState(0);
    const [amabilidade, setAmabilidade] = useState(0);
    const [conscienciosidade, setConscienciosidade] = useState(0);
    const [neuroticismo, setNeuroticismo] = useState(0);
    const [aberturaParaExpericencias, setAberturaParaExpericencias] = useState(0);

    function saveAnswer1(answer1) {
        setAnswer1(answer1);
        return (answer1)
    }

    function saveAnswer2(answer2) {
        setAnswer2(answer2);
    }

    function saveAnswer3(answer3) {
        setAnswer3(answer3);
    }

    function saveAnswer4(answer4) {
        setAnswer4(answer4);
    }

    function saveAnswer5(answer5) {
        setAnswer5(answer5);
    }

    function saveAnswer6(answer6) {
        setAnswer6(answer6);
    }

    function saveAnswer7(answer7) {
        setAnswer7(answer7);
    }

    function saveAnswer8(answer8) {
        setAnswer8(answer8);
    }

    function saveAnswer9(answer9) {
        setAnswer9(answer9);
    }

    function saveAnswer10(answer10) {
        setAnswer10(answer10);
    }

    function saveAnswer11(answer11) {
        setAnswer11(answer11);
    }

    function saveAnswer12(answer12) {
        setAnswer12(answer12);
    }

    function saveAnswer13(answer13) {
        setAnswer13(answer13);
    }

    function saveAnswer14(answer14) {
        setAnswer14(answer14);
    }

    function saveAnswer15(answer15) {
        setAnswer15(answer15);
    }

    function saveAnswer16(answer16) {
        setAnswer16(answer16);
    }

    function saveAnswer17(answer17) {
        setAnswer17(answer17);
    }

    function saveAnswer18(answer18) {
        setAnswer18(answer18);
    }

    function saveAnswer19(answer19) {
        setAnswer19(answer19);
    }

    function saveAnswer20(answer20) {
        setAnswer20(answer20);
    }

    function saveAnswer21(answer21) {
        setAnswer21(answer21);
    }

    function saveAnswer22(answer22) {
        setAnswer22(answer22);
    }

    function saveAnswer23(answer23) {
        setAnswer23(answer23);
    }

    function saveAnswer24(answer24) {
        setAnswer24(answer24);
    }

    function saveAnswer25(answer25) {
        setAnswer25(answer25);
    }

    function saveAnswer26(answer26) {
        setAnswer26(answer26);
    }

    function saveAnswer27(answer27) {
        setAnswer27(answer27);
    }

    function saveAnswer28(answer28) {
        setAnswer28(answer28);
    }

    function saveAnswer29(answer29) {
        setAnswer29(answer29);
    }

    function saveAnswer30(answer30) {
        setAnswer30(answer30);
    }

    function saveAnswer31(answer31) {
        setAnswer31(answer31);
    }

    function saveAnswer32(answer32) {
        setAnswer32(answer32);
    }

    function saveAnswer33(answer33) {
        setAnswer33(answer33);
    }

    function saveAnswer34(answer34) {
        setAnswer34(answer34);
    }

    function saveAnswer35(answer35) {
        setAnswer35(answer35);
    }

    function saveAnswer36(answer36) {
        setAnswer36(answer36);
    }

    function saveAnswer37(answer37) {
        setAnswer37(answer37);
    }

    function saveAnswer38(answer38) {
        setAnswer38(answer38);
    }

    function saveAnswer39(answer39) {
        setAnswer39(answer39);
    }

    function saveAnswer40(answer40) {
        setAnswer40(answer40);
    }

    function saveAnswer41(answer41) {
        setAnswer41(answer41);
    }

    function saveAnswer42(answer42) {
        setAnswer42(answer42);
    }

    function saveAnswer43(answer43) {
        setAnswer43(answer43);
    }

    function saveAnswer44(answer44) {
        setAnswer44(answer44);
    }

    function calcularResultado() {
        setExtroversao((answer1 + answer6 + answer11 + answer16 + answer21 + answer26 + answer31 + answer36)/8);
        setAmabilidade((answer2 + answer7 + answer12 + answer17 + answer22 + answer27 + answer32 + answer37 + answer42)/9);
        setConscienciosidade((answer3 + answer8 + answer13 + answer18 + answer23 + answer28 + answer33 + answer38 + answer43)/9);
        setNeuroticismo((answer4 + answer9 + answer14 + answer19 + answer24 + answer29 + answer34 + answer39)/8);
        setAberturaParaExpericencias((answer5 + answer10 + answer15 + answer20 + answer25 + answer30 + answer35 + answer40 + answer41 + answer44)/10);
    }


    return (
        <AuthContext.Provider
            value={{
                answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10,
                answer11, answer12, answer13, answer14, answer15, answer16, answer17, answer18, answer19, answer20,
                answer21, answer22, answer23, answer24, answer25, answer26, answer27, answer28, answer29, answer30,
                answer31, answer32, answer33, answer34, answer35, answer36, answer37, answer38, answer39, answer40, answer41, answer42, answer43, answer44,
                saveAnswer1, saveAnswer2, saveAnswer3, saveAnswer4, saveAnswer5, saveAnswer6, saveAnswer7, saveAnswer8, saveAnswer9,
                saveAnswer10, saveAnswer11, saveAnswer12, saveAnswer13, saveAnswer14, saveAnswer15, saveAnswer16, saveAnswer17, saveAnswer18, saveAnswer19, saveAnswer20,
                saveAnswer21, saveAnswer22, saveAnswer23, saveAnswer24, saveAnswer25, saveAnswer26, saveAnswer27, saveAnswer28, saveAnswer29,
                saveAnswer30, saveAnswer31, saveAnswer32, saveAnswer33, saveAnswer34, saveAnswer35, saveAnswer36, saveAnswer37, saveAnswer38, saveAnswer39,
                saveAnswer40, saveAnswer41, saveAnswer42, saveAnswer43, saveAnswer44, calcularResultado,
                extroversao, amabilidade, conscienciosidade, neuroticismo, aberturaParaExpericencias
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}