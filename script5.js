const locations = [
  { image: 'image/amaharasi.jpg', lat: 36.8158, lng: 137.0469, description: '　<高岡市　国定公園　雨晴海岸>　雨晴海岸は富山湾に面した美しい海岸で、晴れた日には海越しに雪をかぶった立山連峰を一望できる絶景スポットとして知られています。夏には穏やかな海水浴場として賑わい、散歩やドライブに適した場所として、四季折々の自然美を楽しむことができます。歴史的には、昔の人々の生活跡や伝説が残り、地元の文化や伝統を感じられる場所でもあります。さらに、周辺には「雨晴温泉」や「雨晴神社」などの観光地が点在しており、観光客や温泉旅行を楽しむ人々にとって魅力的なエリアです。自然環境に恵まれ、立山連峰を背景にした海岸線や豊かな海の生物を観察できることも、この地域の魅力のひとつです。' }, // 雨晴海岸
  { image: 'image/kurobe.jpg', lat: 36.5668, lng: 137.6638, description: '　<立山町　黒部ダム>　黒部ダムは、高さ186メートルを誇る日本最大級のアーチ式コンクリートダムで、その建設は険しい地形や過酷な自然環境を克服した土木技術の歴史的偉業として知られています。毎年6月から10月に行われる観光放水は迫力ある景観で多くの観光客を魅了し、周辺は大自然に囲まれており、新緑や紅葉、雪景色といった四季折々の美しさを楽しむことができます。また、立山黒部アルペンルートのハイライトとしてケーブルカーやロープウェイを乗り継ぎながらアクセスでき、展望台や遊覧船からの絶景も人気です。' }, // 黒部ダム
  { image: 'image/zuiryuji.jpg', lat: 36.7355, lng: 137.0110, description: '　<高岡市　国宝　瑞龍寺>　瑞龍寺（ずいりゅうじ）は、高岡市にある曹洞宗の名刹で、加賀藩二代藩主・前田利長の菩提を弔うために三代藩主・前田利常によって建立され、国宝に指定された山門、仏殿、法堂を中心とする壮麗な伽藍配置が特徴で、日本の禅宗建築を代表する重要な文化財です。境内には歴史的建造物が整然と並び、白砂の美しい庭園が広がる中で、季節ごとに異なる趣を楽しむことができ、特に夜間ライトアップや雪景色は訪れる人々を魅了します。また、静寂に包まれた心を落ち着ける空間として、参拝や座禅体験ができる場としても人気があり、歴史と文化、そして自然が融合した高岡市を代表する観光名所です。' }, // 瑞龍寺
  { image: 'image/gokayama.jpg', lat: 36.4281, lng: 136.9360, description: '　<南砺市　白川郷・五箇山の合掌造り集落>　世界文化遺産「白川郷・五箇山の合掌造り集落」の一部で、急峻な山間地に点在する美しい茅葺き屋根の合掌造り家屋が特徴的な地域であり、自然と共生しながら培われた伝統的な暮らしが色濃く残されています。菅沼（すがぬま）集落と相倉（あいのくら）集落を中心に、四季折々の景観が楽しめる中、特に冬の雪に覆われた景色は幻想的で多くの観光客を魅了します。また、地元の食文化や民謡、工芸品なども豊かで、訪れる人々に五箇山ならではの文化を体感させてくれます。静かで落ち着いた環境の中、歴史や文化、自然の調和が息づく、日本の原風景を感じられる特別な場所です。' }, // 五箇山
  { image: 'image/gokayama2.jpg', lat: 36.4282, lng: 136.9360, description: '　<南砺市　白川郷・五箇山の合掌造り集落>　世界文化遺産「白川郷・五箇山の合掌造り集落」の一部で、急峻な山間地に点在する美しい茅葺き屋根の合掌造り家屋が特徴的な地域であり、自然と共生しながら培われた伝統的な暮らしが色濃く残されています。菅沼（すがぬま）集落と相倉（あいのくら）集落を中心に、四季折々の景観が楽しめる中、特に冬の雪に覆われた景色は幻想的で多くの観光客を魅了します。また、地元の食文化や民謡、工芸品なども豊かで、訪れる人々に五箇山ならではの文化を体感させてくれます。静かで落ち着いた環境の中、歴史や文化、自然の調和が息づく、日本の原風景を感じられる特別な場所です。' }, // 五箇山２
  { image: 'image/himi.jpg', lat: 36.8644, lng: 136.9875, description: '　<氷見市　道の駅氷見　ひみ番屋街>　氷見市にある人気の道の駅で、氷見漁港から直送される新鮮な海産物をはじめ、地元の農産物や特産品が豊富に揃うほか、絶景の立山連峰と富山湾を一望できるロケーションが魅力です。館内には、新鮮な魚介類を使った料理が楽しめるレストランや氷見ならではの土産物が並ぶ売店があり、特に氷見ブリや海鮮丼などのグルメが観光客に人気を集めています。また、敷地内には足湯施設や観光案内所も設置されており、ドライブの休憩や観光情報の拠点としても便利です。四季折々の景色と地元ならではの味覚を楽しめる道の駅氷見は、氷見市を訪れる人々にとって欠かせないスポットとなっています。' }, // 道の駅氷見
  { image: 'image/himi2.jpg', lat: 36.8644, lng: 136.9866, description: '　<氷見市　道の駅氷見　>　氷見市にある人気の道の駅で、氷見漁港から直送される新鮮な海産物をはじめ、地元の農産物や特産品が豊富に揃うほか、絶景の立山連峰と富山湾を一望できるロケーションが魅力です。館内には、新鮮な魚介類を使った料理が楽しめるレストランや氷見ならではの土産物が並ぶ売店があり、特に氷見ブリや海鮮丼などのグルメが観光客に人気を集めています。また、敷地内には足湯施設や観光案内所も設置されており、ドライブの休憩や観光情報の拠点としても便利です。テラスから富山湾を一望でき、インスタ映えが狙えます。' }, // 氷見２
  { image: 'image/himi3.jpg', lat: 36.8644, lng: 136.9866, description: '　<氷見市　道の駅氷見　アンブレラテラス>　氷見市にある人気の道の駅で、氷見漁港から直送される新鮮な海産物をはじめ、地元の農産物や特産品が豊富に揃うほか、絶景の立山連峰と富山湾を一望できるロケーションが魅力です。館内には、新鮮な魚介類を使った料理が楽しめるレストランや氷見ならではの土産物が並ぶ売店があり、特に氷見ブリや海鮮丼などのグルメが観光客に人気を集めています。また、敷地内には足湯施設や観光案内所も設置されており、ドライブの休憩や観光情報の拠点としても便利です。写真のような映えスポットも多く、若者にも人気があります。' }, // 氷見３
  { image: 'image/hotaika.jpg', lat: 36.7741, lng: 137.3449, description: '　<滑川市　ほたるいかミュージアム>　富山湾の豊かな自然が育む特産品であるホタルイカをテーマに、その生態や生息環境、地元文化との結びつきを学びながら楽しめる観光スポットです。館内では、ホタルイカの発光の仕組みを解説した展示や実際に発光する姿を観察できる体験型のコーナーがあり、特に春季には「ホタルイカ発光ライブショー」が行われ、幻想的な光の演出が多くの来館者を魅了します。特産品やお土産も充実しており、富山ならではのショッピングが楽しめます。' }, // ほたるいか
  { image: 'image/josi.jpg', lat: 36.6940, lng: 137.2108, description: '　<富山市　富山城址公園　景雲橋>　富山市の中心部に位置する公園で、戦国時代から江戸時代にかけて富山城があった場所に整備され、現在は美しい庭園や歴史資料を通じて城の歴史を感じられる市民や観光客に親しまれるスポットです。園内には再建された富山城の模擬天守があり、富山市郷土博物館として地域の歴史や文化を紹介する展示が行われているほか、四季折々の花々や木々が彩る庭園や、堀を囲む水辺の景色が散策や憩いの場として人気を集めています。また、ライトアップや桜の季節には多くの人々が訪れ、幻想的な雰囲気が広がるため、写真撮影にも適した場所です。' }, // 城址公園
  { image: 'image/josi2.jpg', lat: 36.6921, lng: 137.2106, description: '　<富山市　富山城址公園　景雲橋>　富山市の中心部に位置する公園で、戦国時代から江戸時代にかけて富山城があった場所に整備され、現在は美しい庭園や歴史資料を通じて城の歴史を感じられる市民や観光客に親しまれるスポットです。園内には再建された富山城の模擬天守があり、富山市郷土博物館として地域の歴史や文化を紹介する展示が行われているほか、四季折々の花々や木々が彩る庭園や、堀を囲む水辺の景色が散策や憩いの場として人気を集めています。また、ライトアップや桜の季節には多くの人々が訪れ、幻想的な雰囲気が広がるため、写真撮影にも適した場所です。' }, // 城址公園２
  { image: 'image/kaiomaru.jpg', lat: 36.7800, lng: 137.1081, description: '　<射水市　海王丸パーク>　射水市の新湊地区にある海辺の公園で、「海の貴婦人」と称される美しい帆船・海王丸が常設展示されていることから、海洋文化や船の魅力を楽しめる観光スポットとして人気です。海王丸は昭和初期に建造され、長年にわたり航海練習船として活躍した歴史を持ち、その優美な姿はパーク全体の象徴となっています。特に年に数回開催される総帆展帆（すべての帆を広げるイベント）は圧巻で、多くの観光客が訪れる見どころの一つです。パーク内には海洋に関する展示施設や、船内見学ができるコースが設けられており、海王丸の歴史や仕組みを学べるほか、広場や遊歩道では、富山湾や立山連峰を望む絶景を楽しむことができます。また、夜間には海王丸がライトアップされ、ロマンチックな雰囲気の中で散策も楽しめます。' }, // 海王丸パーク
  { image: 'image/kaiomaru2.jpg', lat: 36.7808, lng: 137.1089, description: '　<射水市　海王丸パーク>　射水市の新湊地区にある海辺の公園で、「海の貴婦人」と称される美しい帆船・海王丸が常設展示されていることから、海洋文化や船の魅力を楽しめる観光スポットとして人気です。海王丸は昭和初期に建造され、長年にわたり航海練習船として活躍した歴史を持ち、その優美な姿はパーク全体の象徴となっています。特に年に数回開催される総帆展帆（すべての帆を広げるイベント）は圧巻で、多くの観光客が訪れる見どころの一つです。パーク内には海洋に関する展示施設や、船内見学ができるコースが設けられており、海王丸の歴史や仕組みを学べるほか、広場や遊歩道では、富山湾や立山連峰を望む絶景を楽しむことができます。また、夜間には海王丸がライトアップされ、ロマンチックな雰囲気の中で散策も楽しめます。' }, // 海王丸２
  { image: 'image/kansui.jpg', lat: 36.7092, lng: 137.2132, description: '　<富山市　富岩運河環水公園　時計台>　富山市の中心部に位置する運河沿いの美しい都市公園で、水辺と緑が調和した開放的な空間が特徴的で、観光客や地元住民にとって人気のスポットです。園内には、立山連峰を背景にした象徴的な「天門橋」や、幻想的な夜景が楽しめるライトアップされた遊歩道があり、散策やジョギング、サイクリングに最適な環境が整っています。また、日本一美しいと言われるスターバックスがあり、水辺を眺めながら特別なひとときを過ごすことができます。季節ごとに咲く花々や噴水、イルミネーションイベントなど、訪れるたびに異なる魅力を楽しめるのもこの公園の魅力です。さらに、運河クルーズも体験でき、船上から公園や市街地の景観を楽しむことができるため、デートや家族連れ、観光客にとって特別な時間を提供します。' }, // 環水公園
  { image: 'image/kansui2.jpg', lat: 36.7081, lng: 137.2137, description: '　<富山市　富岩運河環水公園>　富山市の中心部に位置する運河沿いの美しい都市公園で、水辺と緑が調和した開放的な空間が特徴的で、観光客や地元住民にとって人気のスポットです。園内には、立山連峰を背景にした象徴的な「天門橋」や、幻想的な夜景が楽しめるライトアップされた遊歩道があり、散策やジョギング、サイクリングに最適な環境が整っています。また、日本一美しいと言われるスターバックスがあり、水辺を眺めながら特別なひとときを過ごすことができます。季節ごとに咲く花々や噴水、イルミネーションイベントなど、訪れるたびに異なる魅力を楽しめるのもこの公園の魅力です。さらに、運河クルーズも体験でき、船上から公園や市街地の景観を楽しむことができるため、デートや家族連れ、観光客にとって特別な時間を提供します。' }, // 環水公園２
  { image: 'image/kansui3.jpg', lat: 36.7093, lng: 137.2124, description: '　<富山市　富岩運河環水公園>　富山市の中心部に位置する運河沿いの美しい都市公園で、水辺と緑が調和した開放的な空間が特徴的で、観光客や地元住民にとって人気のスポットです。園内には、立山連峰を背景にした象徴的な「天門橋」や、幻想的な夜景が楽しめるライトアップされた遊歩道があり、散策やジョギング、サイクリングに最適な環境が整っています。また、日本一美しいと言われるスターバックスがあり、水辺を眺めながら特別なひとときを過ごすことができます。季節ごとに咲く花々や噴水、イルミネーションイベントなど、訪れるたびに異なる魅力を楽しめるのもこの公園の魅力です。さらに、運河クルーズも体験でき、船上から公園や市街地の景観を楽しむことができるため、デートや家族連れ、観光客にとって特別な時間を提供します。' }, // 環水公園３
  { image: 'image/kurobekyokoku.jpg', lat: 36.8147, lng: 137.5879, description: '　<立山町　黒部峡谷　トロッコ列車>　日本を代表する峡谷で、北アルプスの険しい山々に囲まれた大自然の中を流れる黒部川が作り出した壮大な景観が特徴です。特に、黒部峡谷鉄道（トロッコ列車）から眺める峡谷美は圧巻で、春の新緑、夏の深い緑、秋の紅葉、冬の雪景色と、四季折々に変化する自然の姿が訪れる人々を魅了します。トロッコ列車は宇奈月駅から欅平駅まで運行されており、途中には名所や宇奈月温泉をはじめとする有名な温泉地が点在しているため、観光や散策を楽しむことができます。' }, // 黒部峡谷
  { image: 'image/mikurigaike.jpg', lat: 36.5812, lng: 137.5960, description: '　<立山町　みくりが池>　立山山系に位置する美しい高山の湖で、標高2,412メートルにあるため、周囲の山々や四季折々の景色が一望できる絶景スポットとして知られています。特に立山の山岳信仰の聖地とされ、古くから多くの登山者や信仰者に訪れられてきました。湖は、澄んだ水面に周囲の山々が映り込む美しい景観を提供し、晴れた日には特にその景色が鮮やかに広がります。立山黒部アルペンルートを通じてアクセスでき、温泉地としても知られています。' }, // みくりが
  { image: 'image/oyamajinjya.jpg', lat: 36.5731, lng: 137.6178, description: '　<立山町　雄山神社>　立山信仰の中心となる重要な場所です。標高3,003メートルの立山の山頂に本殿があり、古くから山岳信仰の聖地として多くの信者に崇拝されています。雄山神社は、立山を神の山として祀り、山頂の雄山を中心に、山岳登拝の場としても利用されてきました。そのため、神社への参拝や登山は、信仰的な意味合いを持ち、現在でも多くの登山者が信仰の一環として参拝に訪れます。特に晴れた日には立山連峰や富山湾を一望することができ、その壮大な景観に圧倒されます。' }, // 雄山神社
  { image: 'image/takaokadaibutu.jpg', lat: 36.7458, lng: 137.0169, description: '　<高岡市　高岡大仏>　日本三大大仏の一つで、高さが約16メートルの巨大な仏像です。この大仏は、寛永19年（1642年）に建立され、江戸時代初期の日本の仏教文化とともに高岡市の象徴的な存在として多くの人々に親しまれています。大仏は、鋳鉄製の仏像としては日本最大級で、その巨大な姿は訪れる人々に圧倒的な迫力を与えます。周囲には広い公園が整備されており、大仏の内部には見学者が入ることもでき、仏像の内部にある展示や仏教に関連した資料を観覧することができるため、仏教文化や歴史を学ぶことができます。' }, // 大仏
  { image: 'image/tonami.jpg', lat: 36.6393, lng: 136.9611, description: '　<砺波市　砺波チューリップ公園>　この公園は、チューリップの栽培が盛んな砺波地域の象徴的な場所として、多彩な種類のチューリップが咲き誇る美しい景観を提供します。春の時期には、約1,000万本以上のチューリップが公園内に植えられ、色とりどりの花々が一斉に開花し、訪れる人々を魅了します。公園内では、チューリップの花壇や展示が整備されており、観光客はチューリップの種類や美しい配色を楽しみながら散策できます。さらに、チューリップのほかにも、季節ごとの花々や植物が園内に植えられており、四季折々の美しい風景が楽しめる場所としても知られています。' }, // 砺波
  { image: 'image/tonami2.jpg', lat: 36.6393, lng: 136.9611, description: '　<砺波市　砺波チューリップ公園　五連水揚水車>　この公園は、チューリップの栽培が盛んな砺波地域の象徴的な場所として、多彩な種類のチューリップが咲き誇る美しい景観を提供します。春の時期には、約1,000万本以上のチューリップが公園内に植えられ、色とりどりの花々が一斉に開花し、訪れる人々を魅了します。公園内では、チューリップの花壇や展示が整備されており、観光客はチューリップの種類や美しい配色を楽しみながら散策できます。さらに、チューリップのほかにも、季節ごとの花々や植物が園内に植えられており、四季折々の美しい風景が楽しめる場所としても知られています。' }, // 砺波２
  { image: 'image/toyabiju2.jpg', lat: 36.7110, lng: 137.2100, description: '　<富山市　富山美術館　オノマトペ屋上>　富山市の中心部に位置する現代美術と地域に根ざした文化を紹介する美術館で、2017年に新しい建物が開館し、アートと市民の交流の場として多くの人々に親しまれています。美術館の建物自体も、近代的なデザインで周囲の自然環境と調和し、特に立山連峰を望むことができる素晴らしいロケーションにあります。常設展示には富山の風景や文化に触れられる作品が多く、地元の芸術家の活動を紹介する場としても機能しています。美術館周辺には広場やカフェも併設されており、来館者は美術鑑賞の後にゆっくりとくつろぐことができます。また、近隣には富山城址公園やその他の文化施設もあり、文化的な散策を楽しむのにも適した場所です。' }, // 富山美術館
  { image: 'image/toyabiju3.jpg', lat: 36.7110, lng: 137.2100, description: '　<富山市　富山美術館　オノマトペ屋上>　富山市の中心部に位置する現代美術と地域に根ざした文化を紹介する美術館で、2017年に新しい建物が開館し、アートと市民の交流の場として多くの人々に親しまれています。美術館の建物自体も、近代的なデザインで周囲の自然環境と調和し、特に立山連峰を望むことができる素晴らしいロケーションにあります。常設展示には富山の風景や文化に触れられる作品が多く、地元の芸術家の活動を紹介する場としても機能しています。美術館周辺には広場やカフェも併設されており、来館者は美術鑑賞の後にゆっくりとくつろぐことができます。また、近隣には富山城址公園やその他の文化施設もあり、文化的な散策を楽しむのにも適した場所です。' }, // 美術館２
  { image: 'image/toyabiju4.jpg', lat: 36.7102, lng: 137.2105, description: '　<富山市　富山美術館>　富山市の中心部に位置する現代美術と地域に根ざした文化を紹介する美術館で、2017年に新しい建物が開館し、アートと市民の交流の場として多くの人々に親しまれています。美術館の建物自体も、近代的なデザインで周囲の自然環境と調和し、特に立山連峰を望むことができる素晴らしいロケーションにあります。常設展示には富山の風景や文化に触れられる作品が多く、地元の芸術家の活動を紹介する場としても機能しています。美術館周辺には広場やカフェも併設されており、来館者は美術鑑賞の後にゆっくりとくつろぐことができます。また、近隣には富山城址公園やその他の文化施設もあり、文化的な散策を楽しむのにも適した場所です。' }, // 美術館３
  { image: 'image/syomyodaki.jpg', lat: 36.5754, lng: 137.5237, description: '　<立山町　称名滝>　落差350メートルを誇り、国内でも最大級の高さを持つ滝として知られています。称名滝は、立山連峰の雪解け水が流れ落ちる姿が非常に美しく、特に春から夏にかけてはその迫力ある滝の水流が見どころとなります。また、周囲の自然環境と調和し、滝の前に広がる豊かな森林や山々の景観と相まって、訪れる人々に圧倒的な美しさと迫力を感じさせます。遊歩道が整備されており、滝壺近くまで歩いて行くことができます。この遊歩道を歩くことで、滝の全景や周囲の自然を間近で楽しむことができ、特に滝の水しぶきや音を感じながらの散策は、自然の雄大さを実感できる貴重な体験です。' }, // 称名滝
];

let selectedLocation = null;
let userGuess = null;
let resultMap = null;
let currentRound = 1;
let totalScore = 0;
let remainingLocations = [];

function showRules() {
  document.getElementById('title-screen').style.display = 'none';
  document.getElementById('rules-screen').style.display = 'flex';
}

function goToTitle() {
  document.getElementById('rules-screen').style.display = 'none';
  document.getElementById('title-screen').style.display = 'flex';
}

function startGame() {
  document.getElementById('title-screen').style.display = 'none';
  document.getElementById('game-screen').style.display = 'flex';
  totalScore = 0;
  remainingLocations = [...locations]; // locations 配列のコピー
  shuffleArray(remainingLocations); // シャッフルする
  currentRound = 1;
  loadRound();
}

function loadRound() {
  document.getElementById('round-number').innerText = currentRound;

  // remainingLocations から1つを取り出す
  selectedLocation = remainingLocations.shift(); // 配列から先頭の要素を取得して削除
  if (selectedLocation) {
    document.getElementById('random-image').src = selectedLocation.image;
  } else {
    console.error('ロケーションが不足しています！');
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function goToMap() {
  document.getElementById('game-screen').style.display = 'none';
  document.getElementById('map-screen').style.display = 'flex';

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: { lat: 36.6943, lng: 137.2128 }, // 初期位置を富山に設定
  });

  map.addListener('click', (event) => {
    userGuess = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    alert(`選択した位置: 緯度 ${userGuess.lat}, 経度 ${userGuess.lng}`);
  });
}

function submitGuess() {
  if (!userGuess) {
    alert('位置を選択してください！');
    return;
  }

  const distance = calculateDistance(
    selectedLocation.lat,
    selectedLocation.lng,
    userGuess.lat,
    userGuess.lng
  );

  totalScore += distance;

  document.getElementById('map-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'flex';
  document.getElementById('result-text').innerText = 
    `あなたの回答は正解の位置と ${distance.toFixed(2)} km 離れています！`;
  document.getElementById('result-image').src = selectedLocation.image;
  document.getElementById('image-description').innerText = selectedLocation.description;

  // 結果地図を初期化
  resultMap = new google.maps.Map(document.getElementById('result-map'), {
    zoom: 15,
    center: selectedLocation, // 正解の位置を中心に
  });

  // 正解の位置にマーカーを表示
  new google.maps.Marker({
    position: selectedLocation,
    map: resultMap,
    label: '答え',
  });

  // ユーザーの解答位置にマーカーを表示
  new google.maps.Marker({
    position: userGuess,
    map: resultMap,
    label: '解答',
  });

  // 二点を線で結ぶ
  new google.maps.Polyline({
    path: [selectedLocation, userGuess],
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
    map: resultMap,
  });
}

function showDetails() {
  // 結果画面を隠して詳細画面を表示
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('detail-screen').style.display = 'flex';

  // 詳細情報の設定
  document.getElementById('result-image').src = selectedLocation.image;
  document.getElementById('image-description').innerText = selectedLocation.description;
}

function onemoreDetail() {
  // 結果画面を隠して詳細画面を表示
  document.getElementById('detail-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'flex';
}

function goAnk() {
  location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfcQsJW6xk88nR3dAZx8UR64mLDZOKrlViFRiJux7udfREM2A/viewform?usp=dialog'
}

function nextRound() {
  if (currentRound < 10) {
    currentRound++;
    userGuess = null;
    document.getElementById('detail-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'flex';
    loadRound();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('detail-screen').style.display = 'none';
  document.getElementById('final-score-screen').style.display = 'flex';

  const averageScore = totalScore / 10;
  let comment = '';
  if (averageScore < 1) {
    comment = '素晴らしい！Sランクです！これであなたも富山マスターです！友達に自慢しちゃいましょう！';
  } else if (averageScore < 5) {
    comment = 'Aランク！良い結果です！富山の観光地が分かってきましたか？思ったよりいい結果で少し嬉しそうですね。(^-^)もう一度プレーしてSランクを目指しましょう！';
  } else {
    comment = '富山についてまだあまり知らないようですね。Bランクです...富山県民が見たら泣いちゃいます。(T-T)このゲームをプレーして一緒に富山について学びましょう！';
  }

  document.getElementById('final-score-text').innerText = 
    `合計スコア: ${totalScore.toFixed(2)} km\n${comment}`;
}

function restartGame() {
  document.getElementById('final-score-screen').style.display = 'none';
  document.getElementById('title-screen').style.display = 'flex';
}

function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = degToRad(lat2 - lat1);
  const dLng = degToRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function degToRad(deg) {
  return deg * (Math.PI / 180);
}
