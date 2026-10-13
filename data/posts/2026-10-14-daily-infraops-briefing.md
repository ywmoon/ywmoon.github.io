---
id: 2026-10-14-daily-infraops-briefing
title: "[2026.10.14] 오늘의 글로벌 클라우드 & 데이터센터 인프라 핵심 동향 브리핑"
date: 2026-10-14
time: "06:16"
category: Daily Briefing
status: published
summary: "Daily InfraOps Digest | Global Cloud & Data Center Report 글로벌 AI 인프라 아키텍처 재편: 800V DC 배전, 네트워크 수랭화, 멀티 GW 커스텀 실리콘 발행일: 2026년 10월 14일 | 대상: 인프라 아키텍트, 시스템 엔지니어, 기술 의사결정권자 📌 오늘의 3대 핵심 관전 포인트 (Key Highlig"
labels:
  - AWS
  - 마이크로소프트
  - 엔비디아
  - 메타
  - 클라우드
  - 데이터센터
  - AI인프라
  - 수랭식냉각
  - 전력인프라
  - 하드웨어보안
---

<div style='font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple SD Gothic Neo", sans-serif; line-height: 1.85; color: #1E293B; max-width: 860px; margin: 0 auto; padding: 20px 0;'>

  <header style='border-bottom: 3px solid #0284C7; padding-bottom: 24px; margin-bottom: 36px;'>
    <p style='color: #0284C7; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;'>Daily InfraOps Digest | Global Cloud & Data Center Report</p>
    <h1 style='font-size: 28px; line-height: 1.4; color: #0F172A; margin: 0 0 16px 0; font-weight: 800;'>글로벌 AI 인프라 아키텍처 재편: 800V DC 배전, 네트워크 수랭화, 멀티 GW 커스텀 실리콘</h1>
    <p style='font-size: 15px; color: #64748B; margin: 0;'>발행일: 2026년 10월 14일 | 대상: 인프라 아키텍트, 시스템 엔지니어, 기술 의사결정권자</p>
  </header>

  <div style='background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px 28px; margin-bottom: 40px;'>
    <h2 style='font-size: 18px; color: #0F172A; margin: 0 0 16px 0; display: flex; align-items: center; font-weight: 700;'>
      <span style='margin-right: 8px;'>📌</span> 오늘의 3대 핵심 관전 포인트 (Key Highlights)
    </h2>
    <ul style='margin: 0; padding-left: 20px; color: #334155; font-size: 15px; line-height: 1.8;'>
      <li style='margin-bottom: 10px;'><strong>하이퍼스케일러 자체 AI 반도체 생태계의 대규모 확장:</strong> 아마존의 AI 스타트업 데카르트 70억 달러 인수 추진과 마이크로소프트의 차세대 '마이아 300' 멀티 기가와트(GW) 배치 로드맵 발표를 통해 엔비디아 의존도 분산 및 서비스 운영 원가 구조 개선이 가속화되고 있습니다.</li>
      <li style='margin-bottom: 10px;'><strong>배전 및 냉각 패러다임의 급격한 전환:</strong> 엔비디아가 랙당 메가와트(MW)급 전력 밀도에 대응하기 위해 800V 고전압 직류(HVDC) 기반 'K-1' 인프라 규격을 공개하고 차세대 '베라 루빈' 설계를 개방한 데 이어, 메타는 고속 패킷 스위칭 발열을 제어하는 수랭식 네트워크 랙 '아이스팩'을 발표했습니다.</li>
      <li><strong>인프라 물리적 복원력과 칩 레벨 보안 표준화:</strong> 우크라이나의 얀덱스 데이터센터 공격으로 지정학적 물리 위협 대응 및 재해 복구(DR) 체계의 중요성이 부각된 가운데, 마벨·마이크로소프트·오라클이 OCP 하드웨어 보안 워킹그룹을 결성하여 서버 펌웨어 및 공급망 보안 표준 수립에 착수했습니다.</li>
    </ul>
  </div>

  <section style='margin-bottom: 44px;'>
    <h2 style='font-size: 22px; color: #0F172A; border-left: 4px solid #0284C7; padding-left: 12px; margin: 36px 0 20px 0; font-weight: 700;'>1. 하이퍼스케일러 커스텀 실리콘 재편: 아마존의 70억 달러 베팅과 MS '마이아 300' 멀티 기가와트 확장</h2>
    
    <p style='margin-bottom: 16px;'>글로벌 클라우드 서비스 제공업체(CSP)들의 자체 주문형 반도체(ASIC) 도입 전략이 단순한 개념 검증(PoC)이나 특정 보조 워크로드 처리를 넘어 대규모 프로덕션 환경의 기저 인프라로 자리 잡고 있습니다. 특히 아마존이 AI 칩 및 모델 가속 기술을 보유한 스타트업 데카르트를 약 70억 달러(한화 약 9조 5천억 원 수준)에 인수를 추진하고 있다는 소식은, 자체 실리콘 포트폴리오를 향한 하이퍼스케일러의 투자 강도가 한층 강화되었음을 보여줍니다.</p>

    <p style='margin-bottom: 16px;'>아마존은 이미 트레이니엄(Trainium)과 인퍼런시아(Inferentia) 시리즈를 지속적으로 업데이트해 왔으나, 고성능 모델 학습 및 대규모 추론 서비스 환경에서 엔비디아의 CUDA 생태계와 견줄 만한 컴파일러 및 소프트웨어 최적화 스택을 확보하는 데 과제를 안고 있었습니다. 이번 데카르트 인수 검토는 하드웨어 아키텍처뿐만 아니라 이종 가속기 간 텐서 병렬화, 인터커넥트 통신 라이브러리, 분산 런타임 최적화 역량을 단기간에 수직 통합하려는 포석으로 분석됩니다.</p>

    <blockquote style='background-color: #F1F5F9; border-left: 4px solid #64748B; margin: 20px 0; padding: 16px 20px; font-size: 15px; color: #334155; border-radius: 0 8px 8px 0;'>
      <strong>업계 기술 분석:</strong> 하이퍼스케일러가 자체 가속기를 확보하는 본질적인 이유는 단순한 조달 단가 절감이 아닙니다. 전 세계 데이터센터 전력 수급이 제한된 상황에서, 상용 범용 GPU 대비 특정 추론 및 학습 워크로드에 최적화된 마이크로아키텍처를 구현함으로써 와트(W)당 연산 처리량을 극대화하고 운영 비용 구조를 안정화하는 것이 핵심 목적입니다.
    </blockquote>

    <p style='margin-bottom: 16px;'>이와 궤를 같이하여 마이크로소프트는 차세대 자체 AI 가속기인 '마이아 300(Maia 300)'을 공개하고, 공식 블로그를 통해 이를 수 기가와트(multi-Gigawatt) 규모의 데이터센터 클러스터에 단계적으로 배치하겠다는 장기 로드맵을 발표했습니다. 마이아 300은 3나노미터 공정 기반으로 설계되어 이전 세대 대비 트랜지스터 집적도와 고대역폭 메모리(HBM) 용량을 대폭 확장한 것이 특징입니다.</p>

    <p style='margin-bottom: 16px;'>마이크로소프트 인프라 엔지니어링 조직의 공식 발표에 따르면, 마이아 시스템의 확장은 단일 칩의 성능 개선에 국한되지 않고 서버 블레이드, 랙 단위 배전 장치, 액체 냉각 루프, 자체 광학 네트워크 패브릭을 포괄하는 완전한 수직 통합형 엔드투엔드 아키텍처로 진행됩니다. 향후 수 기가와트 용량에 달하는 전력 인프라를 마이아 클러스터 전용으로 할당한다는 계획은 애저(Azure) 인프라 전체에서 엔비디아 하드웨어에 대한 의존율을 구조적으로 분산하고 서비스 마진율을 방어하겠다는 명확한 의지를 보여줍니다.</p>
  </section>

  <section style='margin-bottom: 44px;'>
    <h2 style='font-size: 22px; color: #0F172A; border-left: 4px solid #0284C7; padding-left: 12px; margin: 36px 0 20px 0; font-weight: 700;'>2. 랙 전력 밀도 한계 돌파: 엔비디아 800V DC 배전 'K-1'과 '베라 루빈' 인프라 개방</h2>

    <p style='margin-bottom: 16px;'>AI 클러스터의 전력 밀도가 랙당 100kW를 초과하여 수백 kW에 도달하면서, 기존 데이터센터 배전 체계는 물리적 한계에 직면했습니다. 엔비디아가 800V 직류(DC) 전력 방식을 채택한 차세대 AI 데이터센터 아키텍처 'K-1'을 전격 공개한 것은 전력 효율화 관점에서 중요한 전환점입니다.</p>

    <p style='margin-bottom: 16px;'>전통적인 데이터센터에서는 변전소로부터 공급된 교류(AC) 고전압을 무정전 전원장치(UPS)와 배전반(PDU)을 거쳐 480V/208V AC로 변환한 뒤, 서버 전원공급장치(PSU)에서 다시 48V 또는 12V DC로 낮추는 다단계 변환 과정을 거쳤습니다. 이 과정에서 지속적인 변환 전력 손실이 발생할 뿐만 아니라, 48V 배전 환경에서는 랙 전력이 100kW를 넘을 때 도체에 흐르는 전류량이 수천 암페어(A)에 달해 구리 부스바(Busbar)의 물리적 부피와 중량이 기하급수적으로 증가하고 저항에 따른 열 손실이 가중되는 구조적 문제가 발생했습니다.</p>

    <div style='background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 20px; margin: 20px 0;'>
      <h3 style='font-size: 16px; color: #0F172A; margin: 0 0 12px 0; font-weight: 700;'>💡 800V 직류(DC) 배전 도입이 인프라 시설에 미치는 공학적 영향</h3>
      <ul style='margin: 0; padding-left: 20px; font-size: 14.5px; color: #334155; line-height: 1.8;'>
        <li><strong>변환 단계 축소:</strong> 수전 설비 인근에서 대용량 중앙 정류기를 통해 800V DC로 직류화한 뒤 랙까지 직접 전송함으로써, 기존 3~4단계에 달하던 AC-DC-AC-DC 변환 단계를 2단계 이하로 단순화하여 전력 변환 손실을 저감합니다.</li>
        <li><strong>케이블 및 부스바 중량 절감:</strong> 전압을 800V로 격상함에 따라 동일한 전력을 전달할 때 도체에 흐르는 전류가 비례하여 감소하므로, 랙 내부의 구리 배선 굵기와 중량을 대폭 줄여 서버 랙의 공간 효율성과 하중 설계를 개선할 수 있습니다.</li>
        <li><strong>발열 분산 및 냉각 에너지 절약:</strong> 배전 경로 자체에서 발생하는 저항 열 손실이 줄어들어 전산실 공조 시스템의 부하를 완화하고 전력효율지수(PUE) 지표를 개선하는 효과를 거둘 수 있습니다.</li>
      </ul>
    </div>

    <p style='margin-bottom: 16px;'>더불어 엔비디아는 차세대 컴퓨팅 플랫폼인 '베라 루빈(Vera Rubin)'의 인프라 레퍼런스 설계를 외부에 개방한다고 밝혔습니다. 지금까지 엔비디아는 고유의 서버 및 랙 설계를 폐쇄적인 어플라이언스 형태로 공급하는 경향이 강했으나, 베라 루빈 세대부터는 랙 구조, 전력 버스 규격, 수랭 매니폴드 인터페이스를 데이터센터 하드웨어 표준 생태계(OCP 등)와 연계할 수 있도록 개방형 정책을 취했습니다.</p>

    <p style='margin-bottom: 16px;'>이러한 결정은 개별 데이터센터 운영사들이 자체 시설 조건에 맞춰 엔비디아의 차세대 시스템을 신속히 수용할 수 있도록 유도함으로써, 하이퍼스케일러들의 자체 ASIC 전환 움직임에 맞서 엔비디아 중심의 하드웨어 생태계 락인을 인프라 레벨까지 확장하려는 전략적 행보로 해석됩니다.</p>
  </section>

  <section style='margin-bottom: 44px;'>
    <h2 style='font-size: 22px; color: #0F172A; border-left: 4px solid #0284C7; padding-left: 12px; margin: 36px 0 20px 0; font-weight: 700;'>3. 네트워크 영역으로 확장된 액체 냉각: 메타의 수랭식 네트워크 랙 '아이스팩(Icepack)'</h2>

    <p style='margin-bottom: 16px;'>그동안 데이터센터 액체 냉각 기술 논의는 주로 수백 와트에서 1kW 이상을 소모하는 GPU와 CPU 등 연산 프로세서에 집중되어 왔습니다. 그러나 메타가 발표한 AI 데이터센터용 수랭식 네트워크 랙 '아이스팩(Icepack)'은 액체 냉각의 적용 범위가 인터커넥트 및 스위칭 패브릭 전반으로 확대되고 있음을 보여줍니다.</p>

    <p style='margin-bottom: 16px;'>초대형 AI 클러스터에서는 수만 대의 가속기 간 텐서 및 그래디언트를 교환하기 위해 수천 개의 800Gbps 및 1.6Tbps 고속 이더넷 스위치가 고밀도로 배치됩니다. 고성능 네트워크 스위치 ASIC 자체의 열설계전력(TDP)이 수백 와트를 넘어서고, 광신호를 전기신호로 변환하는 초고속 옵티컬 트랜시버가 전면 포트에 빽빽하게 장착되면서 네트워크 랙 내부의 열 집중 현상은 심각한 수준에 도달했습니다. 공랭식 팬만으로는 고밀도 네트워크 장비의 온도를 안정적으로 제어하기 어려워지고, 팬 가동으로 인한 전력 소모 또한 데이터센터 전체 PUE를 저해하는 요인이 되었습니다.</p>

    <p style='margin-bottom: 16px;'>메타가 공개한 아이스팩 아키텍처는 다음과 같은 기술적 특징을 지닙니다:</p>

    <ul style='margin: 0 0 16px 0; padding-left: 20px; color: #334155; font-size: 15px; line-height: 1.8;'>
      <li><strong>D2C(Direct-to-Chip) 냉각판의 네트워크 ASIC 적용:</strong> 스위치 패브릭 칩 위에 전용 구리 냉각 블록(Cold Plate)을 밀착시켜 냉각수를 순환시킴으로써 공랭 대비 열 전달 저항을 대폭 낮췄습니다.</li>
      <li><strong>광 트랜시버 모듈 열 인터페이스 개선:</strong> 발열에 취약하여 비트 에러 레이트(BER) 증가의 원인이 되는 전면 옵티컬 트랜시버 케이지에 맞춤형 열전도 인터페이스를 설계하여 레이저 다이오드의 과열을 방지하고 네트워크 전송 안정성을 확보했습니다.</li>
      <li><strong>모듈형 수랭 분배 장치(CDU) 및 퀵 디스커넥트(QD) 커플링:</strong> 유지보수 시 냉각수 누수 위험을 원천 차단하기 위해 무누수 드립리스(Non-drip) 퀵 디스커넥트 커플링과 실시간 압력 강하 감지 센서를 기본 탑재하여 장애 발생 시 신속한 장비 교체가 가능하도록 구성했습니다.</li>
    </ul>

    <p style='margin-bottom: 16px;'>메타의 이번 설계 공개는 연산 노드뿐만 아니라 네트워크 랙 전체를 수랭 루프에 통합하는 것이 차세대 AI 데이터센터 표준 아키텍처의 필수 요소가 되었음을 시사합니다.</p>
  </section>

  <section style='margin-bottom: 44px;'>
    <h2 style='font-size: 22px; color: #0F172A; border-left: 4px solid #0284C7; padding-left: 12px; margin: 36px 0 20px 0; font-weight: 700;'>4. 공급망 보안과 물리적 복원력: OCP 하드웨어 보안 표준화 및 지정학적 위기 관리</h2>

    <p style='margin-bottom: 16px;'>인프라 하드웨어의 전력 및 냉각 사양이 고도화되는 가운데, 하드웨어 공급망(Supply Chain)과 물리적 인프라 자체의 안전성 및 복원력을 확보하기 위한 산업계의 움직임도 가시화되고 있습니다.</p>

    <p style='margin-bottom: 16px;'>마벨(Marvell), 마이크로소프트, 오라클은 오픈 컴퓨트 프로젝트(OCP) 산하에 새로운 워킹그룹을 공동 발족하고, 데이터센터 하드웨어 보안 표준화에 공식 착수했습니다. AI 인프라의 확대로 인해 다양한 벤더의 가속기, 스위치, 스마트NIC/DPU, 스토리지 어플라이언스가 단일 랙에 혼합 배치되면서, 칩셋 제조 단계부터 데이터센터 랙 실장 단계까지 펌웨어 변조나 악의적 백도어 삽입을 검증하는 신뢰 체계(Root of Trust, RoT)의 표준 규격 정립이 시급해졌기 때문입니다.</p>

    <p style='margin-bottom: 16px;'>3사가 주도하는 OCP 보안 프레임워크는 암호화 기반 부팅 무결성 검증, 런타임 펌웨어 서명 인증, 상호 운용 가능한 원격 증명(Remote Attestation) 프로토콜을 규격화하여 멀티 벤더 환경에서도 일관된 보안 거버넌스를 확립하는 것을 목표로 삼고 있습니다.</p>

    <div style='background-color: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px; padding: 20px; margin: 20px 0;'>
      <h3 style='font-size: 16px; color: #991B1B; margin: 0 0 10px 0; font-weight: 700;'>⚠️ 지정학적 위기 속 데이터센터 물리적 복원력의 시사점</h3>
      <p style='margin: 0; font-size: 14.5px; color: #7F1D1D; line-height: 1.8;'>
        외신을 통해 보도된 우크라이나의 얀덱스(Yandex) 데이터센터 물리적 타격 사례는, 디지털 인프라 시설이 국가 간 분쟁에서 핵심 전략적 타깃이 될 수 있음을 다시 한번 확인시켜 주었습니다. 비록 타격과 온라인 정보 조작 감소 사이의 인과관계에 대해서는 다양한 평가가 존재하나, 인프라 아키텍처 관점에서 시설의 물리적 파괴에 대비한 재해 복구(DR) 체계의 중요성을 재조명하는 계기가 되었습니다.
      </p>
    </div>

    <p style='margin-bottom: 16px;'>단순한 소프트웨어 수준의 다중 가용 영역(Multi-AZ) 이중화에 안주하지 않고, 국가 경계를 넘나드는 지리적 분산 백업, 비상 전력망 자립 체계, 외부 통신망 단절 시의 대체 위성 및 라우팅 경로 확보 등 물리적 회복탄력성(Resilience)을 종합적인 인프라 설계 항목으로 포함해야 한다는 분석이 설득력을 얻고 있습니다.</p>
  </section>

  <section style='margin-bottom: 44px; background-color: #F8FAFC; border-left: 4px solid #0284C7; padding: 24px; border-radius: 0 8px 8px 0;'>
    <h2 style='font-size: 20px; color: #0F172A; margin: 0 0 16px 0; font-weight: 700;'>💡 인프라 엔지니어 및 아키텍트를 위한 종합 제언</h2>
    <p style='margin-bottom: 12px; font-size: 15px; color: #334155;'>
      오늘날의 인프라 진화는 서버 섀시 내부의 부품 개선 단계를 완전히 넘어섰습니다. 전력(800V DC), 냉각(서버 및 네트워크 랙 전면 수랭화), 반도체(자체 실리콘 수직 계열화), 보안(OCP 펌웨어 RoT)이 유기적으로 결합된 <strong>'메가와트급 단일 통합 시스템으로서의 데이터센터'</strong> 관점이 요구됩니다.
    </p>
    <p style='margin: 0; font-size: 15px; color: #334155;'>
      기술 의사결정권자들은 향후 도입할 컴퓨팅 인프라가 기존 공랭 기반 시설에서 지속 가능한지 냉정하게 평가하고, 초고압 직류 배전 도입 가능성 검토, 배관 인프라 사전 확충, 멀티 벤더 칩셋에 대응 가능한 표준 보안 검증 체계를 선제적으로 수립해야 할 시점입니다.
    </p>
  </section>

  <footer style='border-top: 1px solid #E2E8F0; padding-top: 24px;'>
    <h2 style='font-size: 18px; color: #0F172A; margin: 0 0 16px 0; font-weight: 700;'>🔗 오늘의 주요 큐레이션 링크</h2>
    <ul style='margin: 0; padding-left: 20px; font-size: 14.5px; color: #475569; line-height: 2;'>
      <li>[전자신문] <a href='https://news.google.com/rss/articles/CBMiTkFVX3lxTE5sYTNzTVVtcV9IUzQ3RHp4OUc2cENrZy1XbHFYY2k5QmhfRk0yWjVQbDZGeUtNT1lFblhqTXpzaUFZaThOcDVIYjdpRlNYZw?oc=5' style='color: #0284C7; text-decoration: none;'>아마존, AI 스타트업 데카르트 70억달러 인수 추진…엔비디아 대항마 확보</a></li>
      <li>[아이티데일리] <a href='https://news.google.com/rss/articles/CBMiaEFVX3lxTFA5dG40WFA1RGE4WmZBdTU4d1F1aDZKb196dDN1M1p6WjlmQ2haMEJFaFNwZjBWaFFsX3h2ZnU0ejcwNlpiMUZPUHdMamxGalJJYUJLYUZXZnItdEd0a2NHYjVtWUxMa3Ey?oc=5' style='color: #0284C7; text-decoration: none;'>GPU 넘어 데이터센터 설계까지…엔비디아, '베라 루빈' 인프라 개방</a></li>
      <li>[지디넷코리아] <a href='https://news.google.com/rss/articles/CBMiVkFVX3lxTE9IS0hyYUxmcDBZeGtMdl9Dc19QcldFZFZvMVJ0RHdISWp2dl9NZEE0aE9SdWFVeHJyMmVJUG5pa19RWFRJZ2MyYk9HMFFUN01TM21jb1BB?oc=5' style='color: #0284C7; text-decoration: none;'>MS, 자체 AI칩 '마이아300' 공개...내년 대규모 배치</a></li>
      <li>[The Official Microsoft Blog] <a href='https://news.google.com/rss/articles/CBMisgFBVV95cUxNQWtCRTJBSThLQjBSa09qbEhKc2d2N0xyMDdJYXFXZWg4UGFRcUExcVBBd292eFl2WGwzVXBCVzg2WWtnOFM5eE1ma2gzTGNSMms5SFFpdTZOVjR4TEZEcmlpZmNYbEdUZmxya1FremFRNmVNTTdzYUlRdzZEYmFBV3VwVWNEUmFDMG9NMjNRX25BRW9Gbktyb0RGNWE2a0kxLTV0VEZ1YXozZDRuNm91YkpB?oc=5' style='color: #0284C7; text-decoration: none;'>Microsoft to expand Azure Maia system to multi-gigawatt deployments</a></li>
      <li>[글로벌이코노믹] <a href='https://news.google.com/rss/articles/CBMihAFBVV95cUxOT3dES3VFaUVFb3NNU3JzeE1ZX1k3LXlQUURRLVV1R25lZ1A4a2Jmb1NZNDZSXzBtY2FCOHp1SXkyaFI0VzltbGN5UFg0Z1dBUGxaNHRGNm1oU1VRRHA3bGw1TDc3ZG1Qc1RWVWpqXy1saGFQS1p6dFprWTRKZG92QzkwTWc?oc=5' style='color: #0284C7; text-decoration: none;'>엔비디아, 800V 직류 전력 방식 적용한 AI 데이터센터 'K-1' 공개</a></li>
      <li>[AI 매터스] <a href='https://news.google.com/rss/articles/CBMiVEFVX3lxTE9tMWFaZkpQV2VGMkNWYlYtSk1jVUc5aTZSc3FsNl8yMVFsSzlBMkd6T0RTUkc0emN2cTBwUE5aZm1aRVBmUTNKWWdaREF2M3plcEp5bA?oc=5' style='color: #0284C7; text-decoration: none;'>메타, AI 데이터센터용 수랭식 네트워크 랙 ‘아이스팩’ 공개</a></li>
      <li>[Investing News Network] <a href='https://news.google.com/rss/articles/CBMixwFBVV95cUxPemM4ZEJ2NFhPXzY3TXBMX3lKaEtqU1M1LTc3cjJVRDE5UDlFUGFkaUJBekM1VVhTMjFwcWRBTlE0cWtNYnozcmNxUmNoVXdQWWVQU0hTSTNTamdaSUJDZ1dQeF9ITDlONzRRS1Ywdi1keWwxZWhwX3ktZk4wcVp4RWVuMUh6S1hJSGxjWFA5NWNmZGtCVktybTNITURZNzlsZWdsT0k4blNSdU5GbmlfZmpHbWo5SjlEUkNMUGc4TkVJOU5oZjNR?oc=5' style='color: #0284C7; text-decoration: none;'>Marvell, Microsoft and Oracle Establish OCP Working Group to Standardize Data Center Hardware Security</a></li>
      <li>[i24NEWS] <a href='https://news.google.com/rss/articles/CBMigwJBVV95cUxNOG5aWEdHc2pMSTBCTVYwNXNsYkhJcW53SVBUMGlSekFjdVJhYndtUlF2MnVxaXAySXF5VEppc0Q0akVyLTFydlQ3aGJCdWRXLVVzQTlqa3QwbGc1OGVqS3p4TGxFOTlxWmxVaXhYV0E1bFRnZl8tcmMzWEtNVjA0bGEtT2hfREk5cVVpbEc5dHFUSDJ3Q1R3U0NVU2lCM0VwcW05ZTQxM0phZ0RPUzVQTW9fSzF3MjZoU2RPZU4xZ1ZBNnNKRWtVT2tMeHZ2R085RkVlQ0Y4bUtldmdWVU5CbmRSd05nbFdtSFZlMXJzSXg0dkZWd1BDTkZ0VTJiX3RoYUdj?oc=5' style='color: #0284C7; text-decoration: none;'>Ukraine hits Yandex data centers; Zelensky claims fewer bots, hate speech online, but no evidence of a link</a></li>
    </ul>
  </footer>

</div>