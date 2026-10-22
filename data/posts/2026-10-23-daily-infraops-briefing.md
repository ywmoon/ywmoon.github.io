---
id: 2026-10-23-daily-infraops-briefing
title: "[2026.10.23] 오늘의 글로벌 클라우드 & 데이터센터 인프라 핵심 동향 브리핑"
date: 2026-10-23
time: "05:57"
category: Daily Briefing
status: published
summary: "📌 오늘의 핵심 관전 포인트 (Key Highlights) 오픈AI의 3대 클라우드 완제 입점과 멀티 모델 허브 경쟁: 오픈AI가 마이크로소프트와의 독점 계약 종료 후 AWS에 이어 구글 클라우드 ‘모델 가든’에 GPT-6 및 코덱스를 전격 탑재했습니다. 구글 클라우드는 제미나이, 클로드, GPT를 단일 콘솔에서 통합 과금·운용하는 독보적 유통망을 구축했습"
labels:
  - AWS
  - 구글클라우드
  - 오픈AI
  - 엔비디아
  - 네오클라우드
  - 데이터센터
  - KT클라우드
  - 액체냉각
  - 전력망
  - 클라우드인프라
---

<div style='font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; line-height: 1.8; color: #1E293B;'>

<div style='background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 5px solid #2563EB; border-radius: 8px; padding: 24px; margin-bottom: 32px;'>
  <h2 style='margin-top: 0; margin-bottom: 16px; font-size: 20px; color: #0F172A; display: flex; align-items: center;'>📌 오늘의 핵심 관전 포인트 (Key Highlights)</h2>
  <ul style='margin: 0; padding-left: 20px; color: #334155; font-size: 15px;'>
    <li style='margin-bottom: 10px;'><strong>오픈AI의 3대 클라우드 완제 입점과 멀티 모델 허브 경쟁:</strong> 오픈AI가 마이크로소프트와의 독점 계약 종료 후 AWS에 이어 구글 클라우드 ‘모델 가든’에 GPT-6 및 코덱스를 전격 탑재했습니다. 구글 클라우드는 제미나이, 클로드, GPT를 단일 콘솔에서 통합 과금·운용하는 독보적 유통망을 구축했습니다.</li>
    <li style='margin-bottom: 10px;'><strong>엔비디아의 227조 원 규모 파트너 지원과 순환 금융 논란:</strong> 호주 네오클라우드 퍼머스의 상장 철회와 맞물려 엔비디아의 1,715억 달러(약 227조 원) 규모 보증·약정 리스크가 수면 위로 부상했습니다. 가트너는 차입금 기반 신흥 클라우드의 80%가 2030년까지 채산성 악화로 도태될 위험을 경고했습니다.</li>
    <li style='margin-bottom: 10px;'><strong>전력 계통 인입 지연과 수십억 달러 랙 유휴화:</strong> 아마존이 월 50억 달러 규모의 엔비디아 최신 랙 서버를 납품받고도 전력망 연결 지연으로 창고에 보관하는 사태가 노출되었으며, 하이퍼스케일러들은 전력 수급 장기화에 따른 자본 회수율 정체에 직면했습니다.</li>
    <li style='margin-bottom: 10px;'><strong>데이터센터 전력 갈등의 정치화와 가상발전소(VPP) 돌파구:</strong> 도널드 트럼프 미국 대통령이 데이터센터의 주민 직접 배당금 지급과 전력 자급 의무화를 압박하는 가운데, 구글은 PJM 권역에서 1GW 규모의 사상 최대 가상발전소 계약을 체결해 분산 자원 오케스트레이션에 나섰습니다.</li>
    <li><strong>고밀도 액체냉각 및 공공 컴플라이언스 인프라 확장:</strong> KT클라우드가 차세대 엔비디아 베라 루빈 도입에 맞춘 50MW급 안산 AIDC 착공에 들어갔으며, 메가존클라우드는 AWS 거브클라우드(GovCloud) 공인 리셀러 권한을 획득해 미국 공공 및 방산 시장 진출 기반을 확보했습니다.</li>
  </ul>
</div>

<h2 style='font-size: 22px; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 8px; margin-top: 40px;'>1. 오픈AI의 3대 하이퍼스케일러 완제 입점: 멀티 모델 플랫폼 주도권과 에이전틱 AI 컴퓨팅</h2>
<p>생성형 AI 모델 유통 지형에 중대한 구조적 변화가 완료되었습니다. 오픈AI는 마이크로소프트(MS)와의 독점 유통 계약이 지난 4월 종료된 이후, 아마존웹서비스(AWS)에 이어 구글 클라우드의 인공지능 모델 공급 플랫폼인 ‘모델 가든(Model Garden)’에 자사 최상위 파운데이션 모델군을 공식 탑재했습니다. 이번에 공급되는 라인업은 최상위 거대언어모델인 ‘GPT-6 아스트라(Astra)’와 경량·특화 모델인 ‘GPT-6.1 솔(Sol)’, ‘GPT-6 루나(Luna)’, 그리고 코딩 전용 자율 에이전트인 ‘코덱스(Codex)’를 포함합니다.</p>
<p>이로써 구글 클라우드는 자체 플래그십 파운데이션 모델인 제미나이(Gemini)와 앤트로픽의 클로드(Claude)에 이어 오픈AI의 GPT 제품군까지 단일 인프라 플랫폼에서 통합 제공하는 유일한 클라우드 사업자 지위를 획득했습니다. 플랫폼 내 가용 모델 풀을 200개 이상으로 확장한 구글 클라우드는 엔터프라이즈 고객이 워크로드 목적에 따라 지연 시간, 추론 비용, 토큰 처리량 등을 정밀 비교해 복수의 모델을 조합할 수 있는 통합 거버넌스를 구현했습니다. 모델 사용료 역시 별도의 외부 결제 없이 기존 구글 클라우드 청구 체계로 단일화되어 기업 고객의 조달 편의성이 대폭 향상되었습니다.</p>
<p>소프트웨어 플랫폼의 확장은 백엔드 인프라의 상용화로 직결되고 있습니다. 구글 클라우드는 제미나이 자율 에이전트를 가동하던 내부 백엔드 인프라를 외부 엔터프라이즈를 위한 상업용 클라우드 서비스로 전격 전환하는 한편, 엔비디아의 차세대 ‘베라 루빈(Vera Rubin)’ 가속기 인프라의 정식 상용화(GA)를 확정했습니다. 엔터프라이즈 시스템 진영에서도 연합 전선이 강화되고 있습니다. 델 테크놀로지스는 엔비디아와 협력하여 ‘엔비디아 기반 델 AI 팩토리’를 온프레미스 데스크톱부터 하이퍼스케일 데이터센터 전반으로 확대하고, 엔비디아 베라 CPU 랙 솔루션과 더불어 그록(Groq) 3 LPU를 탑재한 랙 스케일 추론 전용 시스템을 출품했습니다. 국내에서도 한국형 AI 에이전트 ‘닷츠’의 글로벌 사용량이 3위를 기록하는 등 에이전틱 컴퓨팅 도입이 가속화되자, AWS는 개발자가 직접 GPU 서버 프로비저닝이나 클러스터 설정 없이도 학습 루프를 제어할 수 있는 서버리스 세이지메이커 AI 트레이닝 세션 API를 공개하며 운영 장벽 완화에 나섰습니다.</p>

<h2 style='font-size: 22px; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 8px; margin-top: 40px;'>2. 엔비디아의 227조 원 파트너 신용 보증과 네오클라우드 구조조정, 그리고 유휴 랙 병목</h2>
<p>엔비디아 가속기를 대규모로 차입 매입해 연산 용량을 재임대하는 신흥 클라우드 사업자, 이른바 ‘네오클라우드(Neo-cloud)’ 진영의 재무적 건전성에 심각한 경고등이 켜졌습니다. 호주의 대표적 네오클라우드 기업 퍼머스(Firmus)는 높은 기업가치 산정 논란과 장기 데이터센터 확장 부지의 불확실성에 직면하며 추진 중이던 기업공개(IPO)를 공식 철회했습니다. 이에 최대 고객사의 재무적 부실을 방어하기 위해 반도체 제조사인 엔비디아가 직접 수억 달러 규모의 지분 투자를 단행하는 구원투수로 등판했습니다.</p>
<p>미국 증권거래위원회(SEC) 공시 자료에 따르면 엔비디아가 전 세계 네오클라우드 파트너사에 제공한 금융 지원, 용량 재매입 약정, 리스 지급보증 총액은 1,715억 달러(약 227조 원)에 달합니다. 세부적으로는 네오클라우드 기업에 대한 직접 지분 투자 및 출자 약정 70억 달러 이상, 파트너사가 재판매하지 못한 서버 가용 용량을 엔비디아가 의무 매입해 주는 약정 360억 달러, 데이터센터 운영사와 직접 계약을 체결한 뒤 네오클라우드에 전대하는 리스 약정 200억 달러, 오픈AI 등 핵심 고객사의 임대료 미납 시 이를 대납하는 지급보증 한도 1,085억 달러가 포함됩니다. 이는 반도체 공급자가 구매자의 차입을 보증하고, 구매자는 해당 자금으로 공급자의 칩을 사들이는 전형적인 공급자 금융(Vendor Financing) 구조로, 자산 가치 하락 시 생태계 전반으로 부실이 전이될 수 있다는 지적이 제기됩니다.</p>
<p>젠슨 황 엔비디아 최고경영자는 베를린 GTC 기조연설에서 AI 연산 인프라에 대한 수요는 견고하나 민간 자본 조달 창구가 급격히 경색되고 있다고 현 시장의 냉각 기류를 시인했습니다. 시장조사업체 가트너는 막대한 차입금에 의존해 인프라를 확장한 네오클라우드 기업의 80%가 설비투자(CapEx) 대비 실질적인 현금 흐름 창출에 실패하여 2030년까지 시장에서 도태될 것이라는 분석을 내놓았습니다. 영국 엔스케일의 경우 마이크로소프트의 계약 철회 충격을 만회하기 위해 앤트로픽과 450억 달러(약 59.7조 원) 규모의 초대형 공급 협상에 주력하고 있으며, 네비우스(Nebius)는 씨티(Citi)로부터 35억 달러 규모의 신용 공여를 확보하며 유동성 방어막을 구축했습니다.</p>
<p>한편 빅테크 기업 내부에서도 공격적인 인프라 지출에 따른 부작용이 노출되고 있습니다. 아마존은 연간 설비투자 규모의 확대로 인해 잉여현금흐름(FCF)이 2년 연속 마이너스를 기록할 위기에 직면했습니다. 특히 월 50억 달러 규모에 달하는 엔비디아 최신 GB300 랙 서버를 조기 납품받았음에도 불구하고, 데이터센터 현장의 전력 인입망 구축이 지연되면서 통전을 하지 못한 채 물류창고에 고가 장비를 유휴 상태로 방치해 둔 사실이 확인되었습니다. 이러한 가속기 유휴 병목을 해소하기 위해 뉴타닉스와 슈퍼마이크로는 노드당 8개의 B300 GPU를 집적한 고밀도 프라이빗 추론 시스템을 출시했으며, 넷리스(Netris)와 협력해 네트워크부터 컴퓨트까지 가상화하는 멀티테넌트 스택을 제시하며 하드웨어 가동률 최적화에 주력하고 있습니다.</p>

<h2 style='font-size: 22px; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 8px; margin-top: 40px;'>3. 데이터센터 전력망 갈등의 정치화: 지역 배당금 압박과 1GW 가상발전소(VPP) 돌파구</h2>
<p>데이터센터 집적에 따른 전력 및 용수 소비 급증이 지역사회와의 첨예한 사회적 갈등으로 비화되면서 규제 환경이 급변하고 있습니다. 도널드 트럼프 미국 대통령은 소셜 미디어를 통해 데이터센터 개발 기업들이 시설 입주 지역사회와 주민 개인에게 직접적인 ‘배당금(Dividend)’을 현금 형태로 지급해야 한다고 공개적으로 요구했습니다. 아울러 대규모 신규 데이터센터에 대해 자체 발전 시설 구축을 통한 100% 전력 자급을 의무화하고, 잉여 전력을 공공 계통망에 강제 환원하도록 규제하겠다는 방침을 밝혔습니다.</p>
<p>비록 에너지 및 법률 전문가들은 발전 의무화 및 요금 체계 개편 권한이 연방정부가 아닌 주 공공유틸리티위원회(PUC) 소관이라는 점을 지적하고 있으나, 11월 중간선거를 앞두고 데이터센터의 전기요금 인상 유발 논란은 최대 정치 쟁점으로 확산되고 있습니다. 데이터센터 감시 단체인 데이터센터 워치(Data Center Watch)에 따르면, 지역 주민들의 강력한 반대와 환경 부담 소송으로 인해 올해 1분기에만 미국 내 최소 75개 데이터센터 프로젝트가 지연되거나 전격 취소되었습니다. 실제로 아마존은 버지니아주 라우던 카운티(Loudoun County)에서 추진하던 대규모 데이터센터 건설 부지 계획을 백지화하고 해당 토지를 카운티 정부에 전액 기증하기로 결정했습니다.</p>
<p>물리적 송전망 인입 지연과 지자체의 인허가 지연이 일상화되자, 하이퍼스케일러들은 계통망 부하를 우회하는 분산 에너지 거버넌스로 전환하고 있습니다. 구글은 가상발전소(VPP) 전문 기업 볼투스(Voltus)와 손잡고 미국 최대 전력망 운영 기관인 PJM 인터커넥션(PJM Interconnection) 관할 권역에서 1GW(기가와트) 규모의 초대형 가상발전소 계약을 체결했습니다. 이는 하이퍼스케일러가 체결한 단일 VPP 계약 중 역대 최대 규모로, 계약 기간은 3년입니다. 볼투스는 기업 및 일반 가정의 배터리 에너지 저장장치(BESS), 스마트 온도조절기, 산업용 유연 부하 자원을 소프트웨어 플랫폼으로 통합하여 전력 피크 시간대에 수요를 자율 분산 감축합니다. 구글은 이를 통해 물리적인 화석연료 발전소나 송전선로 증설 없이도 유효 전력망 용량을 확보하며 데이터센터 가동을 뒷받침하는 새로운 전력 수급 모델을 정립하고 있습니다.</p>

<h2 style='font-size: 22px; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 8px; margin-top: 40px;'>4. 고밀도 인프라 수용을 위한 설비 엔지니어링 혁신: 50MW급 안산 AIDC 착공과 차세대 액체냉각</h2>
<p>차세대 초고밀도 AI 칩셋 도입에 맞춰 데이터센터 물리 설비의 설계 기준도 획기적으로 재편되고 있습니다. KT클라우드는 수도권 AI 인프라 공급 확대를 목표로 경기도 안산 반월국가산업단지 내 총 수전용량 50MW(IT 부하용량 32MW) 규모의 ‘안산 AI 데이터센터(AIDC)’ 신축 공사에 착수했습니다. 시공은 3,150억 원 규모의 계약을 수주한 CJ대한통운 건설부문이 전담하며, 오는 2029년 준공을 목표로 지하 2층~지상 9층, 연면적 약 36,879㎡ 규모로 건립됩니다. 이번 프로젝트는 KT클라우드가 추진하는 2031년 총 1GW AIDC 공급 마스터플랜의 핵심 축입니다.</p>
<p>안산 AIDC는 엔비디아의 차세대 프로세서인 ‘베라 루빈(Vera Rubin)’ 등 개당 수십 킬로와트(kW)에 달하는 고발열·고중량 AI 랙을 안정적으로 배치할 수 있도록 건물 슬래브의 하중 지지력을 대폭 상향한 고하중 구조를 채택했습니다. 특히 모든 전산실에 랙 단위 직접 액체냉각(Direct-to-Chip Liquid Cooling) 시스템을 전면 도입할 수 있도록 배관 헤더와 펌핑 루프 설계를 기본 반영했습니다. 냉각 효율 개선을 위해 건물 상부의 자연풍을 활용하는 외벽 냉각 코일과 밀폐형 냉각탑을 결합한 ‘고효율 프리쿨링(Free-Cooling)’ 시스템을 적용, 간절기와 동절기 외기 냉방을 통해 전력효율지수(PUE)를 극대화하도록 설계되었습니다.</p>
<p>시공 관리 품질 또한 고도화되었습니다. CJ대한통운 건설부문은 현장 관리에 정기 드론 촬영 플랫폼과 독자 개발한 인공지능 기반 ‘건설공정 내비게이션’, 그리고 시간 축이 통합된 4D 건설정보모델링(BIM)을 도입해 설비 간 간섭을 사전 차단하고 있습니다. 특히 장비 초기 기동부터 부하 시험까지 전 공정을 철저히 점검하는 커미셔닝 레벨 3 단계까지 시공사가 직접 주관하여 인프라 무결성을 확보할 방침입니다. 글로벌 코로케이션 시장에서도 이 같은 흐름이 이어져, 에퀴닉스(Equinix)는 차세대 AI 가속기를 위한 고밀도 액체냉각 인프라 실증 전담 연구시설인 ‘EPIC(Equinix Production Infrastructure Centre)’ 액체냉각 혁신 센터를 개소하고 글로벌 고객사들의 수랭 전환 기술 검증 지원에 착수했습니다.</p>

<h2 style='font-size: 22px; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 8px; margin-top: 40px;'>5. 공공 컴플라이언스 인프라 확장과 하이퍼스케일러 가용성 장애의 시사점</h2>
<p>클라우드 인프라 운용에 있어 고도의 규제 준수 역량과 서비스 연속성 관리가 핵심 화두로 대두되고 있습니다. 국내 대표 클라우드 관리 기업(MSP)인 메가존클라우드는 AWS의 ‘공인 정부 리셀러’ 자격을 공식 획득하며 미국 공공 및 규제 시장 진출을 위한 제도적 발판을 마련했습니다. AWS 거브클라우드(GovCloud)는 미국 정부 및 방위산업이 요구하는 최고 수준의 보안·컴플라이언스 기준(FedRAMP High 및 DoD SRG 규격)을 충족하도록 물리적·논리적으로 분리된 전용 인프라 리전입니다. 메가존클라우드는 미국 현지 법인을 중심으로 정부 조달 시장을 공략하는 한편, 미국 정부 및 방산·항공우주 공급망 진출을 꾀하는 한국 기업들을 대상으로 보안 거버넌스 수립과 클라우드 이전·운영을 원스톱으로 지원할 계획입니다.</p>
<p>한편 인프라의 안정적 운용 측면에서는 단일 클라우드 종속성에 대한 경고음이 울렸습니다. 구글 클라우드의 인프라 장애로 인해 유럽 최대 핀테크 플랫폼인 레볼루트(Revolut)의 핵심 금융 결제 및 송금 서비스가 광범위한 다운타임을 기록하는 사고가 발생했습니다. 구글 클라우드가 공식 사과 성명을 발표하고 복구에 나섰으나, 하이퍼스케일러의 백엔드 인프라 장애가 다운스트림의 글로벌 핀테크 금융망을 일시에 마비시킬 수 있음을 입증했습니다. 이는 엔터프라이즈 아키텍트들에게 특정 리전이나 단일 플랫폼의 가용성에 의존하지 않고, 멀티 리전 액티브-액티브 장애 조치(Failover) 체계와 서킷 브레이커, 독립적인 하이브리드 재해 복구(DR) 아키텍처를 사전에 의무화해야 한다는 기술적 과제를 명확히 던져주고 있습니다.</p>

<h2 style='font-size: 22px; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 8px; margin-top: 40px;'>🔗 오늘의 주요 큐레이션 링크</h2>
<ul style='list-style-type: none; padding-left: 0; font-size: 14px; line-height: 2;'>
  <li style='margin-bottom: 8px;'>📌 <a href='https://www.hani.co.kr/arti/economy/it/1283622.html' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>오픈AI, 경쟁사 구글과도 손잡았다…미 3대 클라우드 모두 GPT 제공</a> - 한겨례</li>
  <li style='margin-bottom: 8px;'>📌 <a href='https://n.news.naver.com/mnews/article/023/0004005453' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>227조원 지원… ‘네오클라우드’ 떠받치는 엔비디아</a> - 조선일보</li>
  <li style='margin-bottom: 8px;'>📌 <a href='https://www.etnews.com/20261022000143' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>KT클라우드, 50㎿ 규모 안산 AIDC 착공…수도권 AI 인프라 공급 확대</a> - 전자신문</li>
  <li style='margin-bottom: 8px;'>📌 <a href='https://www.newsis.com/view/NISX20261022_0003837221' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>CJ대한통운 건설부문, KT클라우드 안산 공사 수주…데이터센터 사업 확장</a> - 뉴시스</li>
  <li style='margin-bottom: 8px;'>📌 <a href='https://www.aitimes.com/news/articleView.html?idxno=216535' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>트럼프 "데이터센터 건설 기업, 지역사회에 '배당금' 지급해야"</a> - AI타임스</li>
  <li style='margin-bottom: 8px;'>📌 <a href='https://www.etnews.com/20261022000305' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>메가존클라우드, AWS 거브클라우드 리셀러 획득…美 공공 진출 기반 마련</a> - 전자신문</li>
  <li style='margin-bottom: 8px;'>📌 <a href='https://www.datacenterdynamics.com/en/news/google-signs-1gw-virtual-power-plant-deal-with-voltus/' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>Google signs 1GW virtual power plant deal with Voltus</a> - DCD</li>
  <li style='margin-bottom: 8px;'>📌 <a href='https://news.google.com/rss/articles/CBMiiwFBVV95cUxNaGEyQ2NtTDJxbVdoQUMzUzZsNEhVVmw1TGk2U3hnUFNJWUlnTnlBRS1sOFd1RUhWZW5DSGVRUHpIRzdUWDdVX2pDSWtGaUdVWkRvRm42a3ZhSkItU29yZmRGaUItRXJ6R3FyNEJSMlFaMTd1UmpBSkdPRHFqaW9jNWRGLUpTVHU5UVJj?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>Revolut services down as Google Cloud apologises for outage</a> - The Independent</li>
  <li style='margin-bottom: 8px;'>📌 <a href='https://news.google.com/rss/articles/CBMivgFBVV95cUxNXzBsaFpHTHYtSTd1RWVXS0pPSHB6amo2NUhOWkNNUHlTMlRJTTR5aUhKSGRKZm1JcjFkSWdwbWlmYy1vTlBfb0hwS1NVSlFhZFhURU1LQ0Y0dC1PeWNMZFdQYWNFYzQyWmRrR0txNFRjbHFvOHllc0RiVzJWdFF0X2ZZcVBISU5OWmNIdEFwUzlWOWlqdlV5YjBCdW40cHBoYUNGbmY3OGdiWUd5dWtSSGVRT3lzVFVvZ1ZsR3FB?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>Amazon cancels plan for data centers in Loudoun County, donates land</a> - The Washington Post</li>
  <li style='margin-bottom: 8px;'>📌 <a href='https://news.google.com/rss/articles/CBMimwFBVV95cUxOLXRjc2RlUG9yVzBWdWlBYmNEZ21vNldpYTVER0cybGZsSmJFb196Zkk0NDhaSjBfNkQ5Z053R29BOFp6Ymg3dlIwNVZFa3hHOFFyVUNxUWNKblpndFpFVjhZVGZ4UkRUVFlVUVdCTGdCVndwcGpXWm9YQXpJQ21CczZzdkpfODZsU2xLcF9QRzhxODV4M0l3c09rWQ?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>Equinix Opens EPIC Liquid Cooling Innovation Centres for AI</a> - Data Centre Magazine</li>
  <li style='margin-bottom: 8px;'>📌 <a href='https://news.google.com/rss/articles/CBMi4wFBVV95cUxPVGcydTNjSkNvMzFLY1lYdHk2Q1NCWDFfOXYzN0drTzc1SDlkMmpWN0xHMG5RWlk2OXQyWHlDZmhaRlFNa25vWTQ4S2c5TDdxTVFvb0pEOVlwVHhWZ3ZOTGNoUnFGb2RBdEg3WEM5OE9jYzRjUWpJeVFGYlhrbjVEdGdPLTFuR1VrcDlsX01SeDNsWXljYnB6T09UUXdtMmZiQWNqVGN6SXpkS2JiTFZpRi01TllzNTNKOEk4dFhqT2Y3SU5yR09SS0V2Q0pKREo3LWx4YnJucG1sREZ4c0VFbk1qZw?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>Trump says data centers should generate their own electricity but experts say only states can mandate that</a> - MarketWatch</li>
  <li style='margin-bottom: 8px;'>📌 <a href='https://news.google.com/rss/articles/CBMipAFBVV95cUxOMkVEMW1MRy1WVS1lMXhwMmxPV0ZieGVlUXlsaW9hUEczbDlsOUliSktHT1ZVTEdsR2k4YldJWS1ZejJaVDZPRTgxd3NGdUE4TlZ6Rng3WHJwUEVvTDN0NVFXTlJPalhlUTN2T1V5V0ZKMDhEMUhLS2JISkJLbEFXd29ZZldpNHNQV0NqV0U2NmZJYlFCYldqZ29XUy1STnNmWVVhRw?oc=5' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>Nebius gets $3.5 billion Citi facility for data center growth</a> - Reuters</li>
</ul>

</div>