"use strict";

// Required dependencies

const surahMap = {
    "1": "Al-Fatiha-الفاتحة",
    "2": "Al-Baqarah-البقرة",
    "3": "Aali Imran-آل عمران",
    "4": "An-Nisa'-النساء",
    "5": "Al-Ma'idah-المائدة",
    "6": "Al-An'am-الأنعام",
    "7": "Al-A'raf-الأعراف",
    "8": "Al-Anfal-الأنفال",
    "9": "At-Tawbah-التوبة",
    "10": "Yunus-يونس",
    "11": "Hud-هود",
    "12": "Yusuf-يوسف",
    "13": "Ar-Ra'd-الرعد",
    "14": "Ibrahim-إبراهيم",
    "15": "Al-Hijr-الحجر",
    "16": "An-Nahl-النحل",
    "17": "Al-Isra'-الإسراء",
    "18": "Al-Kahf-الكهف",
    "19": "Maryam-مريم",
    "20": "Ta-Ha-طه",
    "21": "Al-Anbiya'-الأنبياء",
    "22": "Al-Hajj-الحج",
    "23": "Al-Mu’minun-المؤمنون",
    "24": "An-Nur-النور",
    "25": "Al-Furqan-الفرقان",
    "26": "Ash-Shu'ara-الشعراء",
    "27": "An-Naml-النمل",
    "28": "Al-Qasas-القصص",
    "29": "Al-Ankabut-العنكبوت",
    "30": "Ar-Rum-الروم",
    "31": "Luqman-لقمان",
    "32": "As-Sajda-السجدة",
    "33": "Al-Ahzab-الأحزاب",
    "34": "Saba'-سبأ",
    "35": "Fatir-فاطر",
    "36": "Ya-Sin-يس",
    "37": "As-Saffat-الصافات",
    "38": "Sad-ص",
    "39": "Az-Zumar-الزمر",
    "40": "Ghafir-غافر",
    "41": "Fussilat-فصلت",
    "42": "Ash-Shura-الشورى",
    "43": "Az-Zukhruf-الزخرف",
    "44": "Ad-Dukhan-الدخان",
    "45": "Al-Jathiya-الجاثية",
    "46": "Al-Ahqaf-الأحقاف",
    "47": "Muhammad-محمد",
    "48": "Al-Fath-الفتح",
    "49": "Al-Hujurat-الحجرات",
    "50": "Qaf-ق",
    "51": "Adh-Dhariyat-الذاريات",
    "52": "At-Tur-الطور",
    "53": "An-Najm-النجم",
    "54": "Al-Qamar-القمر",
    "55": "Ar-Rahman-الرحمن",
    "56": "Al-Waqi'a-الواقعة",
    "57": "Al-Hadid-الحديد",
    "58": "Al-Mujadila-المجادلة",
    "59": "Al-Hashr-الحشر",
    "60": "Al-Mumtahina-الممتحنة",
    "61": "As-Saff-الصف",
    "62": "Al-Jumu'a-الجمعة",
    "63": "Al-Munafiqun-المنافقون",
    "64": "At-Taghabun-التغابن",
    "65": "At-Talaq-الطلاق",
    "66": "At-Tahrim-التحريم",
    "67": "Al-Mulk-الملك",
    "68": "Al-Qalam-القلم",
    "69": "Al-Haqqa-الحاقة",
    "70": "Al-Ma'arij-المعارج",
    "71": "Nuh-نوح",
    "72": "Al-Jinn-الجن",
    "73": "Al-Muzzammil-المزمل",
    "74": "Al-Muddaththir-المدثر",
    "75": "Al-Qiyama-القيامة",
    "76": "Al-Insan-الإنسان",
    "77": "Al-Mursalat-المرسلات",
    "78": "An-Naba'-النبأ",
    "79": "An-Nazi'at-النازعات",
    "80": "Abasa-عبس",
    "81": "At-Takwir-التكوير",
    "82": "Al-Infitar-الإنفطار",
    "83": "Al-Mutaffifin-المطففين",
    "84": "Al-Inshiqaq-الإنشقاق",
    "85": "Al-Buruj-البروج",
    "86": "At-Tariq-الطارق",
    "87": "Al-A'la-الأعلى",
    "88": "Al-Ghashiya-الغاشية",
    "89": "Al-Fajr-الفجر",
    "90": "Al-Balad-البلد",
    "91": "Ash-Shams-الشمس",
    "92": "Al-Lail-الليل",
    "93": "Ad-Duhaa-الضحى",
    "94": "Ash-Sharh-الشرح",
    "95": "At-Tin-التين",
    "96": "Al-'Alaq-العلق",
    "97": "Al-Qadr-القدر",
    "98": "Al-Bayyina-البينة",
    "99": "Az-Zalzala-الزلزلة",
    "100": "Al-'Adiyat-العاديات",
    "101": "Al-Qari'a-القارعة",
    "102": "At-Takathur-التكاثر",
    "103": "Al-Asr-العصر",
    "104": "Al-Humaza-الهمزة",
    "105": "Al-Fil-الفيل",
    "106": "Quraish-قريش",
    "107": "Al-Ma'un-الماعون",
    "108": "Al-Kawthar-الكوثر",
    "109": "Al-Kafiroon-الكافرون",
    "110": "An-Nasr-النصر",
    "111": "Al-Masad-المسد",
    "112": "Al-Ikhlas-الإخلاص",
    "113": "Al-Falaq-الفلق",
    "114": "An-Nas-الناس"
};

// Function to search the Quran API
async function searchQuran() {
    let phrase = document.getElementById("searchInput").value.trim();
    if (!phrase) {
        alert("Please enter a phrase to search.");
        return;
    }

    let formattedPhrase = `"${phrase}"`;
    let encodedPhrase = encodeURIComponent(formattedPhrase);
    let baseUrl = `https://api.quran.com/api/v4/search?q=${encodedPhrase}`;

    try {
        let response = await axios.get(baseUrl);
        let data = response.data;

        if (!data.search || data.search.total_results === undefined) {
            document.getElementById("results").innerHTML = "<p>No results found.</p>";
            return;
        }

        let totalResults = data.search.total_results;
        let allResults = [];

        for (let result of data.search.results) {
            let verseKey = result.verse_key || "N/A";
            let [surahNumber, verseNumber] = verseKey.split(":");
            let link = `https://quran.com/${surahNumber}/${verseNumber}`;
            allResults.push({ surahNumber, verseNumber, link });
        }

        displayResults(allResults, totalResults);
    } catch (error) {
        document.getElementById("results").innerHTML = `<p>Error fetching data: ${error}</p>`;
    }
}

// Function to display results on the webpage
function displayResults(results, totalCount) {
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `<h3>Total Results Found: ${totalCount}</h3>`;

    results.forEach(({ surahNumber, verseNumber, link }) => {
        let surahName = surahMap[surahNumber] || `Surah ${surahNumber}`;
        let resultHTML = `
            <div class="result">
                <p><strong>${surahName}</strong> (Verse ${verseNumber})</p>
                <a href="${link}" target="_blank">View on Quran.com</a>
            </div>
        `;
        resultsDiv.innerHTML += resultHTML;
    });
}
